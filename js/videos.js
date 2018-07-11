$(document).ready(function(){

var videos = [
    {
        title: "Stravinsky Petrouchka 2nd and 1st. Mvt.",
        link: "https://www.youtube.com/watch?v=sLHh0BvIpB8",
    },
    {
        title: "Liszt La Campanella",
        link: "https://www.youtube.com/watch?v=05i6BNDrw9k",
    },
    {
        title: "Rachmaninoff Prelude op 32. No. 5 and Moment Musicaux op. 16. No. 4",
        link: "https://www.youtube.com/watch?v=C2NQ1aTGsIo",
    },
    {
        title: "Liszt La Campanella",
        link: "https://www.youtube.com/watch?v=e2ah_JGvn-Y",
    },
    {
        title: "Chopin Etude Op. 25 No. 11 \"Winter Wind\"",
        link: "https://www.youtube.com/watch?v=qRzPU8cy2Sc",
    },
    {
        title: "Chopin Grande Polonaise Op.22",
        link: "https://www.youtube.com/watch?v=vy8URJ8hHyU",
    },
    {
        title: "Chopin Andante Spianato",
        link: "https://www.youtube.com/watch?v=9CoYR3d30Vk",
    },
    {
        title: "Beethoven Sonata Op. 57 No. 23 Appassionata 3rd mvt.",
        link: "https://www.youtube.com/watch?v=W8Kto5cLthM"
    },
    {
        title: "Beethoven Sonata Op. 57 No. 23 Appassionata 2nd mvt.",
        link: "https://www.youtube.com/watch?v=64x_xtBIjlY",
    },
    {
        title: "Beethoven Sonata Op. 57 No. 23 Appassionata 1st mvt.",
        link: "https://www.youtube.com/watch?v=G_DH18TYCL8",
    },
    {
        title: "Stravinsky Petrouchka and Liszt La Campanella Excerpted from Solo Recital 2nd Half",
        link: "https://www.youtube.com/watch?v=wbwzt-SuCnU",
    },
    {
        title: "Prokovief Sonata op. 28 No. 3",
        link: "https://www.youtube.com/watch?v=H_o7qzPCaic",
    },
    {
        title: "Stravinsky Petrouchka 2nd. Movement",
        link: "https://www.youtube.com/watch?v=1vBEPLX5C-c",
    },
    {
        title: "Stravinsky Petrouchka 1st. Movement",
        link: "https://www.youtube.com/watch?v=RpZbmrXwkp4",
    },
    {
        title: "Liszt La Campanella",
        link: "https://www.youtube.com/watch?v=N5UvJPKx9mg",
    },
    {
        title: "Beethoven Appasionata Sonata Op. 57 No. 23, 3rd movement",
        link: "https://www.youtube.com/watch?v=L0y8yXcINVk",
    },
    {
        title: "Beethoven Piano Concerto No. 2 1st Mov. and Cadenza",
        link: "https://www.youtube.com/watch?v=SXNRKVavgZg",
    },
    {
        title: "Felix Mendelssohn Piano Concerto No. 1 First Mvt.",
        link: "https://www.youtube.com/watch?v=KJ2lUS3WLL0",
    },
    {
        title: "Mendelssohn Piano Concerto No.1, 2nd, 3rd Movement",
        link: "https://www.youtube.com/watch?v=SYFiDI3d-8M",
    },
    /*
    {
        title: "Beethoven Sonata Op. 14 No.2 1st Movement",
        link: "https://www.youtube.com/watch?v=3T2HqeaxAQo",
    },*/
    {
        title: "Chopin Etude Op.25 No.11, Winter Wind",
        link: "https://www.youtube.com/watch?v=4RrROFjmYpk",
    },
    /*
    {
        title: "Chopin - Fantasia Impromptu Op.66",
        link: "https://www.youtube.com/watch?v=O2oMm6E9aHk",
    } */
];

for (var key = 0; key < videos.length; key++) {
    var thumb_link = videos[key]['link'].substring(0,8) + "img.youtube.com/vi/" + videos[key]['link'].substring(32) + "/maxresdefault.jpg";

    $("#videos-flex").append(
        "<div class=\'video-box\' data-video-title=\'" + videos[key]['title'] + "\' data-video-link=\'" + videos[key]["link"] + "\' data-video-thumb=\'" + thumb_link + "\' style=\'background-image:url(" + thumb_link + "\' ></div>"
    );
}



$('.video-box').each(function() {
    var append_overlay_text = '<div class=\"video-box-overlay\"></div>';
    var append_link = '<a href=\'' + $(this).data("video-link") + '\'>' + $(this).data("video-title") + 
    '</a>';
    $(this).append(append_overlay_text);
    $(this).find("div").append(append_link);
});

$('.video-box-overlay').click(function() {
    window.open($(this).find("a").attr("href"));
})
});
