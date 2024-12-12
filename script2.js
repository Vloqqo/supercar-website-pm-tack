document.addEventListener('DOMContentLoaded', function() {
    const content = document.getElementById('selection1');
    
    // Define the HTML content for each button in JavaScript
    const contentChanges = {
      button1: `<section id="selection1" class="selection1">
                <h2>Color</h2>
                <section class="colors">
                    <a href="#!" class="color-pick white-pick" id="colorsvg"></a>
                    <a href="#!" class="color-pick black-pick" id="colorsvg"></a>
                    <a href="#!" class="color-pick grey-pick" id="colorsvg"></a>
                    <a href="#!" class="color-pick blue-pick" id="colorsvg"></a>
                    <a href="#!" class="color-pick silver-pick" id="colorsvg"></a>
                    <section class="colors2">
                    <a href="#!" class="color-pick red-pick" id="colorsvg"></a>
                    <a href="#!" class="color-pick gold-pick" id="colorsvg"></a>
                    <a href="#!" class="color-pick beige-pick" id="colorsvg"></a>
                    <a href="#!" class="color-pick green-pick" id="colorsvg"></a>
                    <a href="#!" class="color-pick yellow-pick" id="colorsvg"></a>
                </section>
            </section>`,
      button2: `<h2>Header for Button 2</h2><p>This is <em>HTML</em> content for button 2.</p>`,
      button3: `<h2>Header for Button 3</h2><p>This is some <span style="color: red;">colored</span> HTML content for button 3.</p>`,
      button4: `<h2>Header for Button 4</h2><p>This is content for button 4, including <a href="#">links</a>.</p>`,
      button5: `<h2>Header for Button 5</h2><p>This is content for button 5.</p>`
    };
  
    // Set up event listeners for each button
    document.getElementById('button1').addEventListener('click', function() {
      content.innerHTML = contentChanges.button1;
    });
    
    document.getElementById('button2').addEventListener('click', function() {
      content.innerHTML = contentChanges.button2;
    });
    
    document.getElementById('button3').addEventListener('click', function() {
      content.innerHTML = contentChanges.button3;
    });
    
    document.getElementById('button4').addEventListener('click', function() {
      content.innerHTML = contentChanges.button4;
    });
  });

  // Will be used for car color picker
// let root = document.documentElement;
// let carWrap = document.getElementById('car-wrap');
// let colorPicker = document.getElementById('color-picker');

// colorPicker.addEventListener('change', function(e){
// 	root.style.setProperty('--car-color', this.value);
// });