let a;
body.setChildren(
    [a = {
        create: 'container',
        attrs: {class: 'container'},
        children: [{
            create: 'btn',
            attrs: {innerHTML: 'test'},
            functions: {
                onclick() {
                    alert('asd')
                }
            }
        }],
        functions: {
            onmousemove() {
                console.log('1')
            }
        },
    }]
);
