function a11yClick(event){
    if(event.type === 'click'){
        return true;
    }
    else if((event.key === "Enter") || (event.key === " ")) {
          return true;
    }
    else{
        return false;
    }
};

const $clickables = document.querySelectorAll('.clickable');
if ($clickables) {
    $clickables.forEach($item => {
        const $href = $item.dataset.href;
        $item.addEventListener('click', event => {
            window.location.href=$href;
        });
        $item.addEventListener('keydown', event => {
            if(a11yClick(event) === true) {
                window.location.href=$href;
            }
        });
    });
}
