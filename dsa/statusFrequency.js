function getStatusFrequency(applications) {
    const count = {};
    for (let app of applications) {
      count[app.status] = (count[app.status] || 0) + 1;
    }
    return count;
  }
  
  const jobs = [
    { status: "Applied" },
    { status: "Interview" },
    { status: "Applied" },
    { status: "Offer" },
    { status: "Rejected" },
    { status: "Interview" },
  ];
  
  console.log(getStatusFrequency(jobs));
  