import styles from './styles.module.css';
import niceday from './niceday.png'
const Main=()=>{

    const handleLogout=()=>{
        localStorage.removeItem("token");
        window.location.reload();
    }

    return (
        <>
        {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous"></link> */}
        <div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
                <img src={niceday} alt="" />
				</div>
				<div className={styles.right}>
                    <button type="button" className={styles.white_btn} onClick={handleLogout}>Log Out</button>
				</div>
			</div>
		</div>
        </>
    )
}
export default Main;