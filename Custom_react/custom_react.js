const main = document.querySelector('#root')
function customreact(element , main)
{
    const domele = document.createElement(element.type)
    domele.innerHTML = element.children
    for(const prop in element.props)
    {
        if(prop == 'children')
            continue
        domele.setAttribute(prop , element.props[prop])
    }
    main.append(domele)
}

const element = {
    type : 'a',
    props : {
        href : 'https://google.com',
        target: '_blank'
    },
    children : 'Click here to visit google'
}

customreact(element,main);