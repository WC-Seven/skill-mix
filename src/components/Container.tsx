import tw from 'tailwind-styled-components'

const Body = tw.div`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-green-600 to-blue-500
    text-white
`

const Container = ({children}) =>{
    return (
        <Body>
            {children}
        </Body>
    )
}

export default Container
