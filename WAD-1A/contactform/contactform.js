document.addEventListener('DOMContentLoaded', function () {
  const teamMembersCountInput = document.getElementById('team_members_count');
  const teamDetailsSection = document.getElementById('team-details');

  teamMembersCountInput.addEventListener('change', function () {
    const teamMembersCount = parseInt(teamMembersCountInput.value) || 0;
    if (teamMembersCount > 0) {
      teamDetailsSection.style.display = 'block';
      addTeamMemberFields(teamMembersCount);
    } else {
      teamDetailsSection.style.display = 'none';
      resetTeamMemberFields();
    }
  });

  function addTeamMemberFields(count) {
    const maxTeamMembers = 6;
    const teamDetailsDiv = document.getElementById('team-details');
    teamDetailsDiv.innerHTML = ''; // Clear previous fields

    const teamMembersCountValidated = Math.min(maxTeamMembers, Math.max(1, count));

    for (let i = 0; i < teamMembersCountValidated; i++) {
      const teamMemberFieldset = document.createElement('fieldset');
      teamMemberFieldset.innerHTML = `
        <legend>Team Member ${i + 1}</legend>
        <div class="form-group">
          <input type="text" name="team_member_name_${i}" class="form-control" placeholder="Full Name" required />
        </div>
        <div class="form-group">
          <input type="text" name="team_member_college_${i}" class="form-control" placeholder="College Name" required />
        </div>
        <div class="form-group">
          <input type="text" name="team_member_year_${i}" class="form-control" placeholder="Year" required />
        </div>
        <div class="form-group">
          <input type="text" name="team_member_department_${i}" class="form-control" placeholder="Department" required />
        </div>
        <div class="form-group">
          <input type="tel" name="team_member_contact_${i}" class="form-control" placeholder="Contact Number" pattern="[0-9]{10}" required />
        </div>
        <div class="form-group">
          <input type="email" name="team_member_email_${i}" class="form-control" placeholder="Email ID" required />
        </div>
      `;
      teamDetailsDiv.appendChild(teamMemberFieldset);
    }
  }

  function resetTeamMemberFields() {
    const teamDetailsDiv = document.getElementById('team-details');
    teamDetailsDiv.innerHTML = ''; // Clear team member fields
  }

  const registerButton = document.getElementById('registerButton');
  registerButton.addEventListener('click', function (event) {
    event.preventDefault();
    try {
      const formData = {
        team_name: document.getElementById('team_name').value,
        team_members_count: document.getElementById('team_members_count').value,
        teamDetails: collectTeamMemberDetails(),
        // Add other form fields as needed
      };

      console.log(JSON.stringify(formData)); // Output to console for verification

      // Uncomment the following lines to send data to the Lambda function
      /*
      const response = await fetch('/your-lambda-function-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      alert(result.message);
      */
    } catch (error) {
      console.error(error);
      alert('An error occurred during registration.');
    }
  });

  function collectTeamMemberDetails() {
    const teamDetails = [];
    for (let i = 0; i < teamMembersCountInput.value; i++) {
      const teamMember = {
        name: document.querySelector(`[name="team_member_name_${i}"]`).value,
        college: document.querySelector(`[name="team_member_college_${i}"]`).value,
        year: document.querySelector(`[name="team_member_year_${i}"]`).value,
        department: document.querySelector(`[name="team_member_department_${i}"]`).value,
        contact: document.querySelector(`[name="team_member_contact_${i}"]`).value,
        email: document.querySelector(`[name="team_member_email_${i}"]`).value,
        id: document.querySelector(`[name="team_member_id_${i}"]`).value,
      };
      teamDetails.push(teamMember);
    }
    return teamDetails;
  }
});
