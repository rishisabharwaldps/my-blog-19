canvas=document.getElementById('myCanvas')
ctx=canvas.getContext("2d")

car1_width=120;
car1_height=70;
car1_x=10;
car1_y=10;

car2_width=120;
car2_height=70;
car2_x=10;
car2_y=100;

car1_image="https://tse2.mm.bing.net/th?id=OIP.iH2YcmQ9aW-BWZUw1uefwQHaDk&pid=Api&P=0&w=333&h=161";
car2_image="https://www.clker.com/cliparts/A/c/g/U/y/T/blue-car-top-view-hi.png";

function add(){
    background_imageTag=new Image();
    car1_imageTag.onload=uploadbackground;
    background_imageTag.src=background_image;

    car1_imageTag=new Image();
    car_imageTag.onload=uploadcar1;
    car1_imageTag.src=car1_image;

    background_imageTag=new Image();
    car2_imageTag.onload=uploadbackground;
    background_imageTag.src=background_image;

    car2_imageTag=new Image();
    car2_imageTag.onload=uploadcar1;
    car2_imageTag.src=car1_image;
}

function uploadbackground(){
    ctx.drawImage(background_imageTag, 0, 0, canvas.width, canvas.height);
}

function upload_car1(){
    ctx.drawImage(background_imageTag, car1.x, car1.y, canvas.width, canvas.height);
}

function upload_car2(){
    ctx.drawImage(background_imageTag, car2.x, car2.y, canvas.width, canvas.height);
}

function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38'){
        car1_up();
        console.log(up)
    }

    if(keyPressed=='40'){
        car1_down();
        console.log(down)
    }

    if(keyPressed=='37'){
        car1_left();
        console.log(left)
    }

    if(keyPressed=='39'){
        car1_right();
        console.log(right)
    }
}

function car1up(){
if (car1_y >=0){
    car1_y=car1_y-10;
    console.log("when up arrow key is pressed, x = "+car1_x +"| y = "+car1_y);
    uploadbackground();
    upload_car1();
    upload_car2();                 
}
}

function car1_down(){
    if (car1_y <=500){
        car1_y=car1_y+10;
        console.log("when down arrow key is pressed, x = "+car1_x +"| y = "+car1_y);
        uploadbackground();
        upload_car1();
        upload_car2();                 
    }
    }

    function car1_left(){
        if (car1_x >=0){
            car1_x=car1_x-10;
            console.log("when left arrow key is pressed, x = "+car1_x +"| y = "+car1_y);
            uploadbackground();
            upload_car1();
            upload_car2();                 
        }
        }

        function car1_right(){
            if (car1_y <=700){
                car1_x=car1_x+10;
                console.log("when right arrow key is pressed, x = "+car1_x +"| y = "+car1_y);
                uploadbackground();
                upload_car1();
                upload_car2();                 
            }
            }