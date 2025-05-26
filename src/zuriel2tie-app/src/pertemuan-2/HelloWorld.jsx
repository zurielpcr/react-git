export default function HelloWorld(){

    const propsUserCard = {
        nama: "Goku",
        nim: "999999",
        tanggal: "2025-01-01"
    }

    return (
        <div>
            <h1>Hello World</h1>
            <p>Selamat Belajar ReactJs</p>
            <GreetingBinjai/>
            <QuoteText />

            <UserCard 
	            nama="Daniel R" 
	            nim="2355301045"
	            tanggal={new Date().toLocaleDateString()}             
	          />
            <UserCard {...propsUserCard}/>

            <img class="fit-image" src="img/sigit.jpg" alt="logo"/>            
        </div>
    )
}

function GreetingBinjai(){
    return (
        <small>Salam dari Binjai</small>
    )
}

function QuoteText(){
    const text = "Mulutmu Harimaumu";
    const text2 = "Aku ingin jadi macan";
    return (
        <div>
            <hr/>
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    )
}

function UserCard(props){
    return (
        <div>
            <hr/>
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
        </div>
    )
}
