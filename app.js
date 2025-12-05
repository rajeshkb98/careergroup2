function searchJobs() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const jobs = document.getElementsByClassName("job");

  for (let i = 0; i < jobs.length; i++) {
    const jobTitle = jobs[i]
      .getElementsByTagName("h2")[0]
      .innerText.toLowerCase();
    const company = jobs[i]
      .getElementsByTagName("p")[0]
      .innerText.toLowerCase();
    const location = jobs[i]
      .getElementsByTagName("p")[1]
      .innerText.toLowerCase();

    if (
      jobTitle.includes(input) ||
      company.includes(input) ||
      location.includes(input)
    ) {
      jobs[i].style.display = "";
    } else {
      jobs[i].style.display = "none";
    }
  }
}
