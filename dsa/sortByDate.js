function sortJobsByDate(applications) {
    return applications.sort((a, b) => new Date(b.appliedDate) - new Date(a.appliedDate));
  }
  
  
  const jobs = [
    { company: "Google", role: "SDE Intern", appliedDate: "2025-04-01" },
    { company: "Meta", role: "Frontend Intern", appliedDate: "2025-03-15" },
    { company: "Amazon", role: "Backend Intern", appliedDate: "2025-04-05" },
  ];
  
  console.log(sortJobsByDate(jobs));
  