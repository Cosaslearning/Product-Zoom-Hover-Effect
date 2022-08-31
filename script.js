/* --------------- Zoom Hover Effect --------------------- */
let picBox = document.getElementById("picbox");
let zoom = document.getElementById("zoom");
let mouseZoom = document.getElementById("mouse_zoom");

let events = {
    mouse: {
        move: "mousemove",
    },
    touch: {
        move: "touchmove",
    },
};

let deviceType = "";

function isTouchDevice(){
    try{
        deviceType = "touch";
        document.createEvent("TouchEvent");
        return true;
    }catch(e){
        deviceType = "mouse";
        return false;
    }
}

const hideEle = () => {
    zoom.style.display = "none";
    mouseZoom.style.display = "none";
};

isTouchDevice();

picBox.addEventListener(events[deviceType].move, (e) => {
        try{
            var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
            var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
        } catch(e) {}
        let imageWidth = picBox.offsetWidth;
        let imageHeight = picBox.offsetHeight;   
        
        if(imageWidth - (x - picBox.getBoundingClientRect().left ) < 15 || x - picBox.getBoundingClientRect().left  < 15 || 
           imageHeight - (y - picBox.getBoundingClientRect().top) < 15 || y - picBox.getBoundingClientRect().top < 15){ 
          hideEle();
        }else{
            zoom.style.display = "block";
            mouseZoom.style.display = "block";
        }

        var posX = ((x - picBox.getBoundingClientRect().left ) / imageWidth).toFixed(4) * 100;
        var posY = ((y - picBox.getBoundingClientRect().top) / imageHeight).toFixed(4) * 100;

        zoom.style.backgroundPosition = posX + "%" + posY + "%";

        mouseZoom.style.top = y + "px";
        mouseZoom.style.left = x + "px";

    });
/* --------------- End Zoom Hover Effect --------------------- */