const body = document.body;


const title = document.createElement(`h1`);
title.textContent = 'My Html Adventure'
body.appendChild(title);


const paragraph =document.createElement(`p`);
paragraph.innerHTML= ` We're writting HTML markup to display in our <strong>browser</strong>.We're basically telling computer what to do.<em>Neat!</em>`;
body.appendChild(paragraph);

const link = document.createElement(`a`);
link.href = 
"https://developer.mozilla.org/en-US/docs/Web/HTML";
link.testContent = 'HTML';

paragraph.insertBefore(link,paragraph.firstChild);


const table = document.createElement('table');
const tableContent = `
<thead>
  <tr>
    <th>Element name</th>
    <th>Display value</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>h1</td>
    <td>block</td>
  </tr>
  <tr>
    <td>p</td>
    <td>block</td>
  </tr>
  <tr>
    <td>strong</td>
    <td>inline</td>
  </tr>
  <tr>
    <td>em</td>
    <td>inline</td>
  </tr>
</tbody>`;
table.innerHTML = tableContent;
body.appendChild(table);
