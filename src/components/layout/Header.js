function Header() {
    return (
        <header style={ headerStyle }>
            <h1>TODO APP</h1>
            <p style={ linkStyle }>Home | Completed</p>
        </header>
    )
}

const headerStyle = {
    background: '#3498DB',
    color: '#fff',
    textAlign: 'center',
    padding: '1rem'
}

const linkStyle = {
    textDecoration: 'none',
    color: '#fff'
}

export default Header;