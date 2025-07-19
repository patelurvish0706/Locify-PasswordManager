import React from 'react'

function SiteDetails() {
    return (
        <>
            <form method="post" action="">
                <h4>FaceBook</h4>
                <table border="0" style={{ borderCollapse: "collapse" }}>
                    <tbody>
                        <tr>
                            <td><label htmlFor="siteName">Name of Website</label></td>
                            <td>
                                <input type="text" name="siteName" id="siteName" placeholder='www.facebook.com' disabled />
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="password">Password</label></td>
                            <td>
                                <input type="password" name="password" id="password" placeholder='123456789' disabled />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={6} style={{ textAlign: "center" }}>
                                <a href="">Edit</a>{" | "}<a href="">Delete</a> <br />
                                <input type="submit" name="submit" id="submit" value={"Back"} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </>
    )
}

export default SiteDetails
