//ini gak harus style, bebas
// import styles from "./footer.module.css";

export default Footer;
function Footer()
{
    // bisa const dan let juga
    // let name = "Fikri";
    // const name = "Fikri";
    const currentYear = new Date().getFullYear();
    return (
        <div>
            <footer className="bg-gray-800 text-white py-4">
                {/* <h2>
                    Copyrigh &copy; Azhar Fikri
                    Nama {name}
                </h2> */}
                {/* <p className={styles.footer__paragrph}> Copyright &copy; Azhar Fikri -  {currentYear} </p> */}
                <p className="text-center"> Copyright &copy; Azhar Fikri -  {currentYear} </p>
            </footer>

        </div>
    );
}

// export default FOoter;