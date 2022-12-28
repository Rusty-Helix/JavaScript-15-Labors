let value = 0;
let value_displayed = document.querySelector('#value')

const buttons = document.querySelectorAll('.btn')
// console.log(buttons)
// buttons.forEach(button => console.log(button))

buttons.forEach(function(button) {
    button.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('increase'))
            value++;
            else if(styles.contains('decrease'))
            value--;
            else if(styles.contains('reset'))
            value=0;
            
            value_displayed.textContent = value
            if (value > 0)
                value_displayed.style.color = 'green'
            if (value < 0)
            value_displayed.style.color = 'red'
            if (value == 0)
            value_displayed.style.color = 'black'
        })
})