TinyTurtle.apply(window, [undefined, 400, 400]);

function square(length){
forward(length);
right(90);
forward(length);
right(90);
forward(length);
right(90);
forward(length);
right(90);
forward(length);
}

function rectangle(length, height){
forward(length);
right(90);
forward(height);
right(90);
forward(length);
right(90);
forward(height);
right(90);

}


// Type your function call below
function triangle(length){
forward(length); 
right(120);
forward(length); 
right(120);
forward(length); 
right(120);
}

//triangle(20);
//triangle(80);

//square(40);
//square(60);

rectangle(90, 70);

stamp();
