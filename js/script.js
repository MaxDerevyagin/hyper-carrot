function loadComponent(url, elementId) 
{
    fetch(url)
        .then(response => response.text())
        .then(data => document.getElementById(elementId).innerHTML = data);
}

function createDiv(id) 
{
    const div = document.createElement('div');
    div.id = id;
    document.body.appendChild(div);
}

function loadPageComponents(mainPageName) 
{
    document.addEventListener('DOMContentLoaded', () => 
    {
        const components = 
        [
            { id: 'header', url: 'header.html' },
            { id: 'main', url: mainPageName },
            { id: 'footer', url: 'footer.html' }
        ];

        components.forEach(component => 
        {
            createDiv(component.id);
            loadComponent(component.url, component.id);
        });
    });
}