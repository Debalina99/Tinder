import React from 'react';
import { Link } from "react-router-dom";
import { Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({
    logo: {
        height: '8.2rem',
        borderRadius: '30%'
    },
    footer: {
        padding: '1.0rem 0',
        borderTop: '1px solid #eee',
        backgroundColor: '#fff',
        color: 'white'
    },
    gridFooter: {
        display: 'grid',
        columnGap: '4.0rem',
        rowGap: '2.0rem',
        gridTemplateColumns: 'repeat(5,1fr)',
        justifyContent: 'center'
    },
    logoCol: {
        // display: 'flex',
        flexDirection: 'column'
    },
    footerLogo: {
        // display:'block',
        marginBottom: '3.2rem',
        display: 'flex',
        gap: '2rem',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    socialLinks: {
        listStyle: 'none',
        display: 'flex',
        gap: "2.0rem",
        padding: '0'
    },
    socialIcon: {
        height: '2.4rem',
        width: '2.4rem',
        borderRadius: '20%'
    },
    copyright: {
        fontSize: '1rem',

        color: 'white',
    },
    footerHeading: {
        fontSize: '1.4rem',
        fontWeight: 500,
        marginBottom: '2rem',
        fontFamily: 'sans-serif'
    },
    contacts: {
        fontStyle: 'normal',
        fontSize: '0.9rem',
        lineHeight: '1.4',
        fontFamily: 'sans-serif'

    },
    address: {
        marginBottom: '1.0rem',
        fontFamily: 'sans-serif'
    },
    footerNav: {
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.0rem',
        padding: '0',
        fontFamily: 'sans-serif'
    },
    footerLink: {
        textDecoration: 'none',
        fontSize: '0.8rem',
        color: 'white',
        transition: 'all 0.3s',
        '&:hover, &:active': {
            color: '#500',
        }
    }

}))
const Footer = () => {
    const classes = useStyles();
    return (
        <div>
            <footer className="bg-red-500 text-white py-4 text-center mt-1" >
                <Container maxWidth='lg' >
                    <Grid container spacing={3} className={classes.gridFooter}>
                        <Grid item xs={12} sm={5} md={3} className={classes.logoCol} >
                            <div className={classes.footerLogo} >
                                <div className="flex items-center ">
                                    <img src="https://cdn.iconscout.com/icon/free/png-512/free-tinder-logo-icon-download-in-svg-png-gif-file-formats--social-media-communication-network-pack-logos-icons-3201567.png?f=webp&w=256https://cdn.iconscout.com/icon/free/png-512/free-tinder-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-logos-pack-icons-6297329.png?f=webp&w=256https://cdn.iconscout.com/icon/free/png-512/free-tinder-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-logos-pack-icons-6297329.png?f=webp&w=256" className="h-10 w-10 mr-2" />
                                    <Link to="/" className="text-white text-2xl font-bold">tinder</Link>
                                </div>
                                <ul className={classes.socialLinks}>
                                    <li>
                                        <Link className={classes.footerLink} to="/">
                                            <img src="data:image/jpeg;base64,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" className={classes.socialIcon} ></img>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className={classes.footerLink} to="/">
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEU6VZ/////p7PR8jLzz9fkwTpySn8czUJ2ElMItTJs7WKOpss+msNAnSJnK0eT6+v2Xps3f4+9cca5KY6fU2upSaalDXaVme7SKmcScqMvP1OTj5vDs7/XGzeIiRZhZca+1vtqxutW+x+B2h7mAjrxugLacEYxHAAADBklEQVR4nO3baXLiMBBAYQdsFDkGwr4MJEAy97/iMPmdOLJUortV7x3Apa8Mkhe5qoiIiIiIiIiIiIiIiIiI1Oecaxrfm5MeY3TOT5vtZvexP3S97Y0SfbM8HBeLP6NTPe/t6TyVHmtE/u29W9Tzp6Bm5oSuWnanMJxJoWt3lwE8e0K3G3T+zAn9/e830GdL6J/Xg32mhO516A/UltC1L4HLg1GhW52jfGaEbjd8ijEldMtRLNCG0K1iJlFLwvYWDzQhdC8JQAtCP6nLFjYf8bOMCaHbzJKA+oXVPg2oX7hJWChMCN0kEaheuI26nzAk9F0qULuwTQYqFzapE6l64fRYunCVdL1mQNjs4x5c2BH62CcXZoSb6EcXRoTuOXm5v3dULPTdgL9hfbwcXr9rrPj9oQ9+B1PPxtXU++a7FAOrJnSiWY9VO36uDbz3va0a6aFGtgq7orlsbZ7A+1T6HnTzO9tYBQY+yT99mAVWLugh27WVHmd8bhwgHBk+hWHC40Z6mAkFCW9WF4r/BQlfvPQwEwoR1ofSz2E9Qag5hAj1hxCh/hAi1B9ChPpDiFB/CBHqDyFCJbmf80FC33OEr4R9y+ef++x+3xE1v3z2HOEr2XdTPuk7g7Bkf8YPENZvpQvXshuGHiC8yL6ceoDwtfj/ofCmrwcIl8ULV6LABwhP29KFa1ngA4S34oVd8cJJ8ULpTWH5hbvShSfhBT+/cC29sS+78Cx8SZNfeBW+pMkvPAgD8wsn0juIsws/SxeO/pYuXOyEgdmF8l+b5BbepJfD7EL5z01yCzvxnfyZhXP5d2+ZhSfx5TC3cCG+HOYWrqXvDrMLZ+KLRW7hWdp3F16zCm/ii0VVtT2F7cVwPUeQ1v1WE7YXQ3qYCRWyn6YnhAj1hxCh/hAi1B9ChPpDiFB/CBHqDyFC/SFEqD+ECPWHEKH+ECLUH0KE+kOIUH8IEeoPIUL9IUSoP4QI9YcQof4QItQfQoT6Q4hQfwgR6g8hQv0hRKg/hAj1hxCh/hAi1B9ChAP6B1ndUcZ6wYWaAAAAAElFTkSuQmCC" className={classes.socialIcon}></img>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className={classes.footerLink} to="/">
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAYFBMVEUbnfD///8AmO8Alu8AmvDz+v73/P77/f/Y7Pzl8v3x+P57v/Xq9f3M5vsqofAAke6ZzfdZsfO33Ppyu/Q2pvHA4fqh0fiPyPaJxPWr1vlNrPJnt/SCxfbH4vpks/Oz2PltNO+DAAAF+ElEQVR4nO2c2ZarKhBAETDiLM5ihv//y6tJOp10NCpaxHNX7ad+at0BiioGCUEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEGQfwDOKWWMUcr5t19lJZSRXGZ+kiR1JnPC6LdfSB9GZBkKN/AOh4MXuCIsJWFj7bPvdmO8Et7BesbxRDKsw5nKjb/hbChNbGsIu+z63h94TBoh99o2nB+HVa46xz99iuedeBNBvYs6rxqqXBXOqEtHoR423R+y7MS9DKph6MVWK2x4Kz6pdIi2f/UuakcqS69tmEZAMlS5lptr/3OauRMulhX416jtN3ftAKxhWNN1klDXhmbBpEs3cOq6LB7STrOtwS88v/5chZ4Na+e4dDbPUVsosBFz/2mLXGPc0Hy6j72L+WCpAW3uz9Cw4Txc7mJVcFNMVPw8ZHlPY+XHmDxMcnsKjbdPArj8DaxLowCVGp2s7DMCTrkMk7fcYLXMczRaOjKL8XcewSlj3lUHqhKWu7kL4fVzJuLJBXXIvKj8ouJmNM9lIrrY5ulPbeNUr6nucf7czC9L20VUfhnefgG7hQhpyZ8x3MwNas+jbWbD2I9nHRIAFUKav48MWzqrcWitEcp+tBqY5Kx8e5KbRLMa5+1nmE8KMWDI25jpOZzktA1XS3vZLycgl9do9oOXkCkdPjMrG0A7q52C+t7gA4WKJ554fG/SeZzAljP4eWwWLyZGTqLpchldslkvk59GH1uqT7/he+SYg1PHUCqkL5rHn+w1MhpLCSKtYOZm2ycxzzL18KC5EVyyfHja0ZJxZ4TJNUyFWK+oFB/o5loyBdQK0w/0MjWTi0utyFv76MgIqKD8kGk/9bMbtkg7H/YipBMAwGaYB3w8nj37uGGTRZQ+ely1SxnazswYHTsQaSVJHMeMsWx8SXYU8G7Wr5wteiPHEkWTHCuNdCaFDgC9jUYtr4UJGar0S5PdyRC2otBaQgnsEV2TfVpqDOflwBTLvy51l072OiNbX9tSA8uklmgywhnRiU4LcXxgmS5pdgLR1JLIEHrgeC3wNHPLSrr50BXTac1KAuht2YEFDTCgsxnqww+VB9DTzPJ1yRUA7szcWb6Ur00NfZqG6mwY6eGCLJa/yLSmskwrBNuY/WVWbbYFF3AVwj4cfNkUJzFwAC3S2TLWwM0MyNDMTAgwUDP3Nmai88XIETPOwLMyqz8NBLoy+4AqAzJmelkHq8CHjXMxdpiWg5fNnolY9kMCPG6EORXCI9iy2dn+pMxHMshiwIE6lTmGWrGzP0UBufs3CFdgmc2a87m6NkwVIGFNGG+Yfm+ZxpF/CjafdcDLsj8ism6lVPJ8bqvNI4Ew3Mm4b1mHIAggVp4c6MW/N5kPpxvWkppV6W3AlgNt0w3TNw1UXAa7X/IBWsEkm+43Lv7wCGbUAO8wjUAlROYMv/c/DPO3r9ECk3XMC3G6tYtTfu+2Zvz5+thywi9eyeQ83XS2CdbdzVtrE225GuBUZuvLNxtSb7ct0Hz7ainn5626Wmi6Vh7SifxNioAVFya3pNNZn6jZu7m/3BXQ5cqx4+/FhfQ6MVPHS6qpZBtaJ58PjWmml68d4LfJl8JVqpcR2MneXPSj2iHZ2YclKL/fd19OUO3LhVPZ6K6ku9m8W2uG6AJzox2YoW8vLIIzdk5d7VLAxDmMmVAWR4lYUdTsZuhTytS6tdnvFcl9hnyj/zWj/iMX63bPDqcv7FzcTVr/eL7hH8tCrN4GdL/ZxaK1qeQL3kmZ34R5gqnLVjqH8Pjtr4Bx0q4cJndEovM9kc11ovayukgW1ccbnQbhkSxXLcuKOt+JSg8neaU9dsI2//Zg+Qslrc6hM7tRezO5QuPoGB4W5DGOl0oGd+l6JZzGxC8Cb9qovxZYtl1N/e1X/ginjKokDd1gxMg5eK44NX7E/o1vMVLKozxLmvQkhOsGgd0TuK4Q4pQ2iX/9qORee9cQvL8oG+VKtplf9/hZK2UeRfzf8vjlmk/TO/fsGkEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBPkf8h+7k1Njk+w6gQAAAABJRU5ErkJggg==" className={classes.socialIcon} ></img>
                                        </Link>
                                    </li>
                                </ul>
                                <Typography className={classes.copyright}>
                                    © 2024 Tinder App. All rights reserved.</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={5} md={2}>

                            <p className={classes.footerHeading} >
                                Contact us
                            </p>
                            <address className={classes.contacts}>
                                <p className={classes.address}>
                                    Candor TechSpace Kolkata, GII, 2nd Floor, Action Area I, Newtown, Kolkata, 700156</p>
                                <p>
                                    <Link className={classes.footerLink} to="/el:91-789-201-6370">+91 789-201-6370</Link><br />
                                    <Link className={classes.footerLink} to="/mailto:hello@dreamjob.com">hello@dreamjob.com</Link>
                                </p>
                            </address>

                        </Grid>
                        <Grid item xs={5} sm={5} md={2}>

                            <p className={classes.footerHeading}>
                                Account
                            </p>
                            <ul className={classes.footerNav}>
                                <li><Link className={classes.footerLink} to="/signup">Create account</Link></li>
                                <li><Link className={classes.footerLink} to="/login">Login</Link></li>
                                <li><Link className={classes.footerLink} to="/">iOS app</Link></li>
                                <li><Link className={classes.footerLink} to="/">Android app</Link></li>
                            </ul>

                        </Grid>
                        <Grid item xs={4.8} sm={5} md={2}>

                            <p className={classes.footerHeading}>Company</p>
                            <ul className={classes.footerNav}>
                                <li><Link className={classes.footerLink} to="/">About Us</Link></li>
                                <li><Link className={classes.footerLink} to="/">Privacy & terms</Link></li>
                                <li><Link className={classes.footerLink} to="/">Help center</Link></li>
                                <li><Link className={classes.footerLink} to="/">Support</Link></li>
                            </ul>

                        </Grid>
                    </Grid>

                </Container>

            </footer>
        </div>
    )

}

export default Footer;