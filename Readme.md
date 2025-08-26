Q1: getElementById basically select the specific id 
    getElementsByClassName: it basically select all the class with this name 
    querySelectorAll: it basically select all the element of the css selector which is matched. It is quite flexible to use

Q2: const divMethod =  document.createElement("div")
    divMethod.classList.add('method')
    document.body.appendChild(divMethod)

Q3: Event Bubbling is basically going upwards like child to parent to grandparrent

  like suppose we have div inside div inside div, then it will cover the inner div and then the outter.

Q4: we add one listener to a parent and event bubbling handle it 

    it reduces complexity and time and clean code

Q5:  preventDefault blocks default browser actions or predifiend things and stopPropagation block event bubbling.
