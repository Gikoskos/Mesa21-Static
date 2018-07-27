function makeEmbededYTVideoURL(id, opts) {
    let video_url = 'https://www.youtube.com/embed/' + id + '?';

    for (let opt_name in opts) {
        video_url += opt_name + '=' + opts[opt_name] + '&';
    }

    //if the user wants the video to loop
    //we have to append the playlist parameter with the video's id
    //https://developers.google.com/youtube/player_parameters#loop
    if (opts.loop) {
        video_url += 'playlist=' + id + '&';
    }

    if (!window.location.href.startsWith('file'))
        return video_url += 'origin=' + window.location.href;

    //remove the trailing ampersand
    return video_url.slice(0, video_url.length - 1);
}

(function main() {
    $(document).ready(() => {
        $(".lg-slick-carousel").lightSlider({
            autoWidth: true,
            adaptiveHeight: true,
            auto: true,
            loop: true,
            item: 3,
            slideMargin: 0,
            thumbMargin: 0,
            galleryMargin: 0,
            onSliderLoad: el => {
                el.lightGallery({
                    mode: 'lg-zoom-in',
                    zoom: false,
                    share: false,
                });
            },
        });
    });

    //workaround for that stupid firefox iframe caching bug
    $('.mesa21-video > iframe').attr('src',
         makeEmbededYTVideoURL('NPvaz99PvBY', {
            controls: '0',
            showinfo: '0',
            autoplay: '1',
            loop: '1'
        })
    );

})();
