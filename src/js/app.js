import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should show the cover image
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the image's url that will be used as a background for the profile cover
        avatarURL: "src/Imagen de WhatsApp 2024-03-30 a las 22.11.59_7fd31c8a.jpg", // this is the url for the profile avatar
        socialMediaPosition: "right", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastName: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); //print on the console

  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.

  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  document.querySelector("#widget_content").innerHTML = `
        <div class="widget">
            ${cover}
            <img src="${variables.avatarURL}" class="photo" />
            <h1>${variables.name || "David"} ${variables.lastName ||
    "Farewell"}</h1>
            <h2>${variables.role || "Role"}</h2>
            <h3>${variables.city || "City"}, ${variables.country ||
    "Country"}</h3>
        <ul class="${variables.socialMediaPosition || "position-right"}">
          <li><a href="https://x.com/${variables.twitter ||
            ""}" target="_blank"><i class="fab fa-twitter"></i></a></li>
          <li><a href="https://github.com/${variables.github ||
            ""}" target="_blank"><i class="fab fa-github"></i></a></li>
          <li><a href="https://www.linkedin.com/in/${variables.linkedin ||
            ""}" target="_blank"><i class="fab fa-linkedin"></i></a></li>
          <li><a href="https://www.instagram.com/${variables.instagram ||
            ""}" target="_blank"><i class="fab fa-instagram"></i></a></li>
</ul>
        </div>`;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    includeCover: true,
    background: "src/resources/USA_Sculptures_Houses_462353.jpg",
    avatarURL: "src/resources/User_Photo_DavidFarewell.jpg",
    socialMediaPosition: "position-left",
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables);

  document.querySelectorAll(".picker").forEach(elm => {
    elm.addEventListener("change", e => {
      const attribute = e.target.getAttribute("for");
      let values = {};
      values[attribute] =
        e.target.value === "" || e.target.value === "null"
          ? null
          : e.target.value === "true"
          ? true
          : e.target.value === "false"
          ? false
          : e.target.value;
      render(Object.assign(window.variables, values));
    });
  });
};
