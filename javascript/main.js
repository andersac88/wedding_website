let partyArray = [
    {
      name: "Jeff Krantz",
      Role: "Best Man",
      Photo: './Images/jeff.png',
      Detail: "Something Something Something"
    },
    {
    name: "Sara St. Aubin",
    Role: "Matron of Honor", 
    Photo: './Images/2436.jpeg',
    Detail: 'Met the bride via a mutual bus stop in elementary school. The friendship was fostered over banging on trashcans in the high school drumline, and beginning our days singing "Black Betty." Likes include making cookies, travelling, and playing with her awesome son.'
    },
    {
    name: "Jesse Andersen",
    Photo: './Images/nick.jpg',
    Role: "Groomsman/Brother of the Groom",
    Detail: "Something Something Something"
    },
    {
    name: "Steve Pratt",
    Photo: './Images/steve.jpg',
    Role: "Brosmaid/Brother of the Bride",
    Detail: `Met the bride shortly after birth - surprise, they're siblings! Steve and Ashley have been able to set aside sibling rivalry and formulate a friendship into adulthood. Likes include lacrosse, making Ashley watch horror movies, and the great outdoors.`
    },
    {
    name: "Peter Jackson", 
    Photo: './Images/IMG_20180903_134435.jpg',
    Role: "Groomsman",
    Detail: "Something Something Something"
    },
    {
    name: "Alex Robertson",
    Photo: './Images/nick.jpg',
    Role: "Bridesmaid",
    Detail: "Met the bride freshmen year at MSU during a happenstance battle in MarioKart. Their friendship has continued by making jokes, watching football, and drinking Founders beer. Likes include eating healthy, hiking, and reading library books."
    },
    {
    name: "Joseph Hallman",
    Photo: './Images/nick.jpg',
    Role: "Groomsman",
    Detail: "Something Something Something"
    },
    {
    name: "Emily Wynn",
    Photo: './Images/nick.jpg',
    Role: "Bridesmaid",
    Detail: "Met the bride during high school marching band, developing a friendship over making homemade calculus videos. Emily and Ashley have maintained a close friendship by living together at MSU and now in the Chicagoland area. Likes include MSU sports, thoughtful reading, and baking bread."
    },
    {
    name: "Theodore Broman",
    Photo: './Images/nick.jpg',
    Role: "Groomsman",
    Detail: "Something Something Something"
    },
    {
    name: "Nick Laux",
    Photo: './Images/nick.jpg',
    Role: "Brosmaid",
    Detail: "Met the bride in third grade, and fostered a friendship by playing foursquare while pretending to be the Backstreet Boys. Likes include being outside, video games, and being German."
    },
    {
    name: 'Spencer "Frank" Meyer',
    Photo: './Images/nick.jpg',
    Role: "Groomsman",
    Detail: "Something Something Something"
    }
  ];


  $(document).on("click", ".bridalParty", function(){
    let value = $(this).attr("data-value")
    console.log(value)
    $("#partyName").text(partyArray[value].name)
    $(".role").text(partyArray[value].Role)
    $(".picture").attr("src", partyArray[value].Photo)
    $("#partyRole").text(partyArray[value].Role)
    $(".details").text(partyArray[value].Detail)
    $("#updateModal").modal("show");
})