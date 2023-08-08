// Define data for brace structures
const braceData = [
  {
    ageText: 'AGE 15-40',
    text1: 'Germany',
    percentages1: [62.1, 37.3, 0.6],
    colors1: ['#990000', '#FEBE00', '#5B7742'],
    text2: 'Negroes',
    percentages2: [41, 54, 5],
    colors2: ['#990000', '#FEBE00', '#5B7742']
  },
  {
    ageText: '40-60',
    text1: 'Germany',
    percentages1: [10.1, 84.8, 5.1],
    colors1: ['#990000', '#FEBE00', '#5B7742'],
    text2: 'Negroes',
    percentages2: [8.5, 79.5, 12],
    colors2: ['#990000', '#FEBE00', '#5B7742']
  },
  {
    ageText: '60 AND OVER',
    text1: 'Germany',
    percentages1: [9.8, 62.2, 28],
    colors1: ['#990000', '#FEBE00', '#5B7742'],
    text2: 'Negroes',
    percentages2: [4.5, 54.5, 41],
    colors2: ['#990000', '#FEBE00', '#5B7742']
  },
];

// Function to generate the brace structure with bars
function generateBrace(container, data, spacing) {
  const brace = document.createElement('div');
  brace.classList.add('brace');
  brace.style.top = `${data.top}px`;
  brace.style.left = `${data.left}px`;

  const braceTextBefore = document.createElement('span');
  braceTextBefore.classList.add('brace-text-before');
  braceTextBefore.textContent = data.ageText;

  const braceOpening = document.createElement('span');
  braceOpening.classList.add('brace-opening');
  braceOpening.textContent = '{';

  const braceTextGroup = document.createElement('div');
  braceTextGroup.classList.add('brace-text-group');

  // Create and append vertical text and horizontal bar chart for text1
  const braceTextVertical1 = document.createElement('span');
  braceTextVertical1.classList.add('brace-text-vertical');
  braceTextVertical1.textContent = data.text1;

  const barChart1 = createBarChart(data.percentages1, data.colors1);
  braceTextVertical1.appendChild(barChart1);

  // Create and append vertical text and horizontal bar chart for text2
  const braceTextVertical2 = document.createElement('span');
  braceTextVertical2.classList.add('brace-text-vertical');
  braceTextVertical2.textContent = data.text2;

  const barChart2 = createBarChart(data.percentages2, data.colors2);
  braceTextVertical2.appendChild(barChart2);

  braceTextGroup.appendChild(braceTextVertical1);

  // Add spacing between bars
  const spacingElement = document.createElement('div');
  spacingElement.style.height = `${spacing}px`;
  braceTextGroup.appendChild(spacingElement);

  braceTextGroup.appendChild(braceTextVertical2);

  brace.appendChild(braceTextBefore);
  brace.appendChild(braceOpening);
  brace.appendChild(braceTextGroup);

  container.appendChild(brace);
}

// Function to create a horizontal bar chart
function createBarChart(percentages, colors) {
  const barChart = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  barChart.classList.add('bar-chart');
  barChart.setAttribute('width', '200');
  barChart.setAttribute('height', '50');

  let xPos = 0;
  for (let i = 0; i < percentages.length; i++) {
      const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      rect.setAttribute('width', `${percentages[i]}%`);
      rect.setAttribute('height', '50%');
      rect.setAttribute('fill', colors[i]);
      rect.setAttribute('x', `${xPos}%`);
      rect.setAttribute('y', '0');
      barChart.appendChild(rect);
      xPos += percentages[i];
  }

  return barChart;
}

// Call the function for each set of data and loop it three times
const braceContainer = document.getElementById('braceContainer');
braceData.forEach((data, index) => {
  generateBrace(braceContainer, {
    ageText: data.ageText,
    text1: data.text1,
    percentages1: data.percentages1,
    colors1: data.colors1,
    text2: data.text2,
    percentages2: data.percentages2,
    colors2: data.colors2,
    top: 60 + index * 240,  // Adjust this value to set vertical spacing between braces
    left: 100
  }, 0); // Adjust this value to set the spacing between the bars within each brace
});



