let partyArray = [
    {
      name: "Jeff Krantz",
      Role: "Best Man",
      Photo: './Images/jeff.png',
      Detail: "Jeff and Andrew met at the bus stop on the first day of kindergarden. With no regard for their sons' opinions, their mother's insisted that they become friends. Fortunately, like for a majority of arranged marriages, the parents were right."
    },
    {
    name: "Sara St. Aubin",
    Role: "Maid of Honor", 
    Photo: './Images/2436.jpeg',
    Detail: 'Met the bride via a mutual bus stop in elementary school. The friendship was fostered over banging on trashcans in the high school drumline, and beginning their days singing "Black Betty." Likes include making cookies, travelling, and playing with her awesome son.'
    },
    {
    name: "Jesse Andersen",
    Photo: './Images/Jesse.jpg',
    Role: "Groomsman/Brother of the Groom",
    Detail: "Jesse is Andrew's youngest older brother. At only 12 years older than Andrew, one can imagine how much they have in common. However, regardless of age, Andrew and Jesse have managed to be their for eachothers times in need and maintain a lasting bond."
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
    Detail: "Andrew first met Peter through the driver-side window of his car. Peter was on the off ramp of a freeway sellig oranges. Andrew, being a generous soul, offered to take Peter for a meal and a haircut. While Peter only took up the former offer, that meal was the start of a life-long friendship."
    },
    {
    name: "Alex Robertson",
    Photo: './Images/20151213_011646.jpg',
    Role: "Bridesmaid",
    Detail: "Met the bride freshmen year at MSU during a happenstance battle in MarioKart. Their friendship has continued by making jokes, watching football, and drinking Founders beer. Likes include eating healthy, hiking, and reading library books."
    },
    {
    name: "Joseph Hallman",
    Photo: './Images/20180602_212724.jpg',
    Role: "Groomsman",
    Detail: "Joe-Joe-Binks is the often forgotten character who was commonly seen besides the beloved Jar-Jar Binks in Star Wars: Episode 1 - The Phantom Menace. Andrew and Joe met following Joe's fall from grace with the studio execs and his relocation to the western suburbs of Chicago."
    },
    {
    name: "Emily Wynn",
    Photo: './Images/IMG_20180707_215005.jpg',
    Role: "Bridesmaid",
    Detail: "Met the bride during high school marching band, developing a friendship over making homemade calculus videos. Emily and Ashley have maintained a close friendship by living together at MSU and now in the Chicagoland area. Likes include MSU sports, thoughtful reading, and baking bread."
    },
    {
    name: "Theodore Bromann",
    Photo: './Images/_storage_emulated_0_Android_data_com.sec.imsservice_files_Samsung Messages_20190320_202649_1553131641832.jpg',
    Role: "Groomsman",
    Detail: `Theodore "Teddy" Bromann and Andrew met in kindergarden through their mutual friend, Jeff (see Best Man). Unfortunately, Teddy and Andrew have not been able to see much of eachother since Teddy's relocation to Oklahoma? Nebraska? Wait, no Kansas. For some reason, Teddy volunatarily moved to Kansas.`
    },
    {
    name: "Nick Laux",
    Photo: './Images/nick.jpg',
    Role: "Brosmaid",
    Detail: "Met the bride in third grade, and fostered a friendship by playing foursquare while pretending to be the Backstreet Boys. Likes include being outside, video games, and being German."
    },
    {
    name: 'Frank "Spencer" Meyer',
    Photo: './Images/20170412_204907.jpg',
    Role: "Groomsman",
    Detail: `Andrew and Frank met through thier mutual friend, Jeff (I'm starting to see a trend here). Intially Frank and Andrew were not too fond of eachother but eventually found a common interest in drag racing Frank's Toyota Carolla in the asphalt jungle that is Glen Ellyn. Frank has recently relocated to Las Vegas where he has rebranded himself as "Spencer", a win-at-all-costs card shark.`
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
