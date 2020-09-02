const menuModule = (() =>{
    return{
        toggleButton: () => {
            document.getElementById('nav-toggle-button').addEventListener('click', event =>{
                const classes = document.querySelector('html').classList;
                if(classes.contains('nav-open')){
                    classes.remove('nav-open');
                }
                else{
                    classes.add('nav-open');
                }
            })
        },

        closeNav: () =>{
            document.getElementById('black-bg').addEventListener('click', event =>{
                document.querySelector('html').classList.remove('nav-open');
            })
        }
    }
})()

menuModule.toggleButton();
menuModule.closeNav();