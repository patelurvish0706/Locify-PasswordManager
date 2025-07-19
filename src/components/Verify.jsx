import React from 'react'

function Verify() {
    return (
        <>
            <form method="post" action="">
                <h4>Enter Profile Password</h4>
                <table border="0" style={{ borderCollapse: "collapse" }}>
                    <tbody>
                        <tr>
                            <td><label htmlFor="password">Password</label></td>
                            <td>
                                <input type="password" name="password" id="password" />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={6} style={{ textAlign: "center" }}>
                                <input type="submit" name="submit" id="submit" value={"Verify"} /> <br /><br />
                                <a href="#">Cancel</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </>
    )
}

export default Verify
