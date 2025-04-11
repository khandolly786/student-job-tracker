function hasDuplicateApplications(applications) {
    const seen = new Set();
  
    for (let app of applications) {
      const key = (app.company + "-" + app.role).toLowerCase();
      if (seen.has(key)) return true;
      seen.add(key);
    }
  
    return false;
  }
  
 
  const jobs = [
    { company: "Google", role: "SDE Intern" },
    { company: "Amazon", role: "ML Intern" },
    { company: "google", role: "sde intern" }, // duplicate
  ];
  
  console.log(hasDuplicateApplications(jobs));  // true
  