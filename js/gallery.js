function getID (){
    var e = document.querySelector('div');
    console.log(e);
}

var owl = $('.owl-carousel');
owl.owlCarousel({
    loop: true,
    dots: false,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        960: {
            items: 3
        },
        1200: {
            items: 2,
        }
    }
});
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY > 0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});

document.querySelector('#gallery').appendChild(JGallery.create([{
    title: 'Audi',
    items: [
        {
            url: '../images/audi-1.jpg',
            thumbUrl: '../images/audi-1.jpg',
            title: 'Audi A8',
            hash: 'audi-1.jpg'
        },
        {
            url: '../images/audi-3.jpg',
            thumbUrl: '../images/audi-3.jpg',
            title: 'Audi A8',
            hash: 'audi-3'
        },
        {
            url: '../images/audi-4.jpg',
            thumbUrl: '../images/audi-4.jpg',
            title: 'Audi A8',
            hash: 'audi-4'
        }
    ]
}, {
    title: 'HTML',
    items: [
        {
            element: JGallery.createElement('<video src="SampleVideo_1280x720_1mb.mp4" loop autoplay/>'),
            thumbElement: JGallery.createElement('<span>Video</span>'),
            title: 'Video',
            hash: 'video'
        },
        {
            element: JGallery.createElement('<span style="font-size: 10vmax">Any HTML content</span>'),
            thumbElement: JGallery.createElement('<span>HTML</span>'),
            title: 'HTML',
            hash: 'html'
        }
    ]
}]).getElement());


