function Message() {

    const name = 'Bridger';
    if (name) 
        return <h1>Hello {name}</h1>;
    return <h1>Hello Stranger</h1>;
    
}

export default Message;