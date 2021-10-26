const app = Vue.createApp({
    data() {
        return {
            introName: 'Navigate your webapp using C#',
            productDescription: 'Cruise to the moon in our luxurious shuttle. Watch the astronauts working outside the International Space Station.',
            // additional properties later
            productImage: 'assets/cruise.jpg',
            productImageDescription: 'An astronaut floats outside the window while you sit in comfort',
            productImageStyle: {
                'border-radius': '15px'
            },
            buttonpressed: {
                notes: 'this button is pressed',
                completed: false
            }
        }
    },
    // TODO: Add methods
    methods: {
        pressed() {
            this.buttonpressed.completed = true;
        },
        changecolour(){

           let a = document.getElementById("testButton2").getAttribute("class");
           console.log(a) 
      
          if(a=="button")
            document.getElementById("testButton2").setAttribute("class","button1");
          else
            document.getElementById("testButton2").setAttribute("class","button");     
        }
    }
});
