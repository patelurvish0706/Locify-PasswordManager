import React from 'react'

function AddSite() {
    return (
        <>
            <form method="post" action="">
                <h4>Add Website Details</h4>
                <table border="0" style={{ borderCollapse: "collapse" }}>
                    <tbody>
                        <tr>
                            <td><label htmlFor="siteName">Name of Website</label></td>
                            <td>
                                <input type="text" name="siteName" id="siteName" />
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="password">Password</label></td>
                            <td>
                                <input type="password" name="password" id="password" />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={6} style={{ textAlign: "center" }}>
                                <input type="submit" name="submit" id="submit" value={"Save Details"} /> <br /><br />
                                <a href="#">Cancel</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </>
    )
}

export default AddSite
