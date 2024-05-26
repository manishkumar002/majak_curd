
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

export default function Login() {
  const navigate=useNavigate()
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
 function onLoginPress() {
  
    const data = { email, password };

    fetch(" http://localhost:8000/api/instructorlogin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json();
        }
      })
      .then((result) => {
        //console.log(result);
        if (result.status === true && result.code === 200) {
          console.log(result.data);
          window.localStorage.setItem(
            "token",
            JSON.stringify(result.data.token)
          );
          window.location.reload(true)
          navigate('/viewblog');
          window.location.reload(true)
        } else {
          alert(result.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row py-3 a1">
          <div className="col-sm-2"></div>
          <div className="col-sm-4 b1 my-4">
            <center>
              <h1 style={{ color: '#fdc700' }} className=" my-4" >Login</h1>
              <input
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
                type="email"
                className="form-control w-100 "
                placeholder="Enter Your Email"
              />
              <br />
              <input
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
                type="password"
                className="form-control w-100"
                placeholder="Enter Your Password"
              />
              <br />
              <div>
               
                <button onClick={onLoginPress} className="form-control w-100" style={{background:'#fdc700'}}>Login</button>
              
              </div>
              <br />
              <h5 className="text-light">
                <b style={{color:'black'}}>Don't have an account? </b><a href="/sign">Sign Up Here</a>
              </h5>
            </center>
          </div>
          <div className="col-sm-4">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABsFBMVEX///84WmQbLjXs7Oz/yAGoqKjc3Nz/xcQqRU78/Pzh4eHw8PDe5OQlTlk8Xmn29/evu74fS1jl6ur/ywB8j5UwVWAgNz7/xgAXKTAdMTijo6P88sz/zwD/xcY7X2j/ycfT09MAEx5FZm8AGiT1tAD92GYqO0LT1tcADxu+vr6zs7MJJCyfhIUAGSOjp62Yn6H778HDx8jot7X89troug4AJDY/VFuKdXa0k5TTqKf+xaf80UH74ZH8zjH9/PH76KRNS08AABOdi4771VPAnBXf29Gtjxf9x0+chBzWrBD+xbHluA8AIjfGoReKkJNsd306SE773HVpgoheZml1en11Z2k1PERYYGRWU1fRt7XdubjYqaq6rq2xqp7ivkeKjIe8r4j9xprTuGrCsn79xoP9xmz+x0To4MTr1oz9392RhotDNkjz0W395+f53nD+x4yEgUcYTmbm1qju0Xw8QitYVRR+cGGHdCPn05e9oKT6ujrfzs1KVTn/x2F1ZyU1PCZSUSdFSSL7zXvYuU+ciC7MtF0TOUsrNi8AFjMQJSRwbUr/2kxTZFTFpyuNciiviiMPrd/QAAAZSklEQVR4nO2di18a17bHCWzBYaIYpzCgg4MvEMcXk4lAFDWVUCYE1CoxJ7Y9TdMmTW/SR5Ie2nNPrTknt8nt4/ZfvvsxbyDODKg0H36fqhUMM1/W2mutvfeawePpq6+++uqrr7766quvvvrqq6+++uqrr74uUtTl81XonPkuf3ilWUPh8KVwi8e7ow9T5wmYGQpfatYUUovHu6PwlRF8bKqtugg42ooPavgMAaGuXEaAvjYKBrtIuNyG8IwV/vC8CKkztdTbFFII6SZ1QBjCMj80fEGA4VFM6Pc1n2YHhMQFOiIcjLTTYO8QmuKUM8Lh4WS0nSLuCS1B1B0h+pchQkjD32iXhM4obBJSIaNcEsLXCtFaqKIxpgvCLspIaPAqyi0h7bOK6jVCbEnKLaGaeNAr0Jqv6oThISL15xkLI1oJ8RhyTUgb7aYMx5BOGF4eOVchwKmuElLmIBqyEg6NOn3LOlNLQoqcolsvpXW/JK9lijRDl7t06jYVvjRh8lISRPHb7jqWejSjIVlj6XkTTkxNDZsyPsqDIc3N3gFCCDh1yVrTdEhodExS2yi8F0MIp59dJgy1iDQE+KK8dKqpLu2M0JQCqaZscd6EqPzrMqFakYYoGLiaM/75E7aYW3Q4Dpurtosch2dB6DHRwWn0hcbSMyEM0ZTqq8h8IS3q9BAhfOM7IFRexDAClYeGh3uEUFeXCacmht8hQoqmrUtRIVhfvEOETQpR9NQ75aWtXmuiVyKN6ay6QgjLeeriCYO+UJO6RUijBakLJ2ytrhAqcXX03SVU8kboIgnb7q6FurGHSpMa6UJrmjMWqU37hGei8yF8971UjTTvLqGyLOy70Fh6tuqFjE83FzRQaJ+7G4fpjartDDM+Fnwtl+Mw5Etk0ul0JhF0kZzPkRB6hCsbBtMDY2NjAwP4e9rvFNJUeTcXNt3tNnFTtfnnEZyusYGEsx4my/6hVV0mdOyltIWPMDo6pXOcAbsg9Kt8Y4fCtHe/tnOAHxhLODhoTxMmNANGBK/XGxUEIVbDiGn7B+1lQg2wthv1Koomxxwi9jBhUAEc2xU0QK9XOCAPZuwetAUhbsRQnr5AQlr10F1B54t6o6sKt93zakFI+/Qt3AskTKuEOqBQvyMI0ZryuM3E2LOEQS2MTusGzB9ls1uqERP2DtqGsEteShoftAzthHBey38xhU+4kw3EeT6/qz5hL/OfJaHe3EYr7UP2CX16pj9AceZObKueE+MBPhDQjOu3dRZnR0iZNkrxDo0DwoxOeIhGYJ4X89l4PJe8G/ib+sS8rfOwEobgRC4YDOJ24Y4IQz6LnK1i6E46gJIFJOS3coF4LpeP39OesRVrrITK3iayYUeETYC4yco2Ia0DDhxu3RGiYiAQgF987C4vas/YOrUWhHQXCFsAwqm0fULDMBwYC/DZLBx/gRv5AH+3HuC1JxIdEIY6JGw51aTtE/qNUwo+JyLAQDYP3RQaUnvCVl3TNA4pHOI7tKEhyNDG/7dNmDASivEsAkRxNFDPGwhtFactCLXTdE+oM1HGoGp/Z8ZE+FEgl4tjxqOjBV73UpeEIW2i755QG4W0Gdj+SpSJcOAeLxIjinmUEjsjpPSrSUKuCTWjqf3djglN43Bg7G8YMH5ExqP2sKtxaFGHhMrvlGNCn5nwXoB4KZaWD93FUuuROuuJUn53bsPQgEnxALEe1kcaoa2l3LMlVIoO2jGhsaZBoSZQ1xC1om1gzFbpfbZe6tMb4x0SGkMNctKF6YUADyH5j/TH7a1kvJ3Q5XqpIQWGKEMF7oCQ1giXlj5GptuaXrzz1UcfGcHtndmZrHnr2YK0/mte6mB+qE7xlz7+BCAHFSHi35eMvjtvd344fGmi66v65mShITshVIy49CkA4D6OpLl65TNjgLU3PfSEJyam8PUWzVdXqtdYuiCkjXFGf8B+1eZRZohLDyAgeIgJ43wBSB9rZrQ3O0Q2hIhd3z8kV6QaH8EPOFqJohDGA7CHED9HiPFb69sAfKYgjtGnvwQWulJ8ovs7pCGzCZWFA2frpT7koggK6jpEjH8OPmAB8wk2o10f9XgmJiaGz2IPmLZePoqIHa55Bz8GgAFAQYwHWMDOsAAUIKKDnQs4Cs9ml5u2Eoac71usAF1f3H8Iv8/MzACGeeBka2Z44owIPbSZEPms472ncYYFJrEQET70yMF5TJ1PpwKR8/3DjVkzITLizNpVJwfVejFaNirgXgVnFG+Tm36a8W0gIbTtbYXw4Yqzg57jPr7b3sSrX64BFszOMizLFp6MOz2ohZBuut7lYne5iaiNlc319fXNlasbzg9q7lTwZxKplP/sOhUu9ooSOjU2EsQdpf6UlqzfJUI6bdjLuaxivUOEnmXTvYYoP1k0fYcIlzTAlfV1FK/87u+p0FYXSZhQVwQ21mBMZvegFYNur1Zvr4skrKm/r6HSdgWsw6rL/dXq7eSKcBSexvwIrMPhOArSNOV0vkoIM+pcZBzVgdsbTAEmHl9vEA6kPLX0/LJvJ5imapn90WWHB8WE9JIaRjfVSvcqMmJvEPo9Bx7PTjqxdEAtZw4OlhweFHfuXR5Qf11RCTfInXN6gXDg8vLS8hK9n9kP1dKZmhsbXkppK4+KDdltTwf3p2krV4S+dMaTSUCXSo96gj6acno+CHAio21x0M8RIoucFN8FpAcIO5WZENbdzwuFwiyegL1DhJdSysocvknHxoZSwPeIl3YqEmnI6KXRIrz+1DtEGKaX0USetiwAotR6EYTt1qbb6LS1fZLx/WnTfWSwqAsibLva0Ebt24ZCKVTJEMLReQRj/lu8PHUxhMEEWlzwBWnUmoVv+Ib+a77dxlsI04eHteTk5PR+SKlpaFTCmOyNV6AuYo6P9vnmfWizL5gIJvzoyw9/wJ8p+4TLc0IUdxYLh/h+m6nmSogmBe6FEMLJuB8S+oMIDZoS/kDfE37bhKlFvas4Nnjp0vCyz0P708Y/9Y0qR/trjsMDQ+O0F91Gcn9kaSSTGshoncF+Neb8NQmp3ag3mtQRB8MZVGPTwUQmnUgh6VOwi8gW7e9obPc2x8tzi8lsVrfjoOGqIFPT8gURdq7VBVHk83qP/2APX/fkTsu4eSpXv0PiqTd8SV3zNrYRqhnor1jTPL17RwyI9VxuIVdHiOe4b3FOkeZxgF/gAwtZnufr0FWjxIZd7VTokNCf6JDw7kKOj+MGowUBKtxb+4cw42cyMLlnMuQrnSBfDgj5el3kF7ZQe4M4nRWzvUc4MJCgYRHjw1+wqsFf9gkp5KR8LsfjltQj8cehXiOEBVtHXkoFAvUjfPFJIBAXc/xXPWdDZ2pJeJRXWhn5ep4f7rV9/I5rGkgoLvzXEWbk89CEvUbYufhAnBdFxYg74Z7uxXCnxwFyhU23CSlLF0ezP50X4VMcY0h3P/9+9whpv1lPblqDgqv7YlzdnjXJ0mxCtZofPib2i/P5BV4cOivCm+wPXSFE22EMW2CYAmAAC9h1/ang8ur0jRtzyYO0FfMpqmd4MTsJfXW/ZaQJoXU3+i3rWKcTPmdnLYC0a8I9sLe39/XX63vw/zfVJy7vzE1HydWlk8kxy6lS9NP37wpzWT4A3bQ5H5J7juNvDu5BYSEEANy01LSuOoYQ4ez23vbs3vYa6gFTCdNR4zXei7tN7ZjLNxbryFW/kb79rolQf99dEz4DgH1m6RhzFWnGWbMUL52fM1ykjxgnzVfQbOxVszjtxz8ATKnJS3UbOjgVM+EsHDNPukG4MW4WadtL3fBaNWdEHGfYWR53Fl+Hdme2Lc1UIQXN2gbrgPAmADJYs3pp17IFtRttIowK+iuvs+yTPZIzCrjtb9Z0Hj7TRWe2ow1tdlJGxjvJplfuGuHStIktGo3FIjFhVXl2Y5sFMw9Ri388/hPa8WXWmT3jeeiEtJORaCJ8DkCVYS25q2uEdCxKwKKxSGRwcDCMPilr0LtI9tDGcZcmCx7G44GftN7bTf2fG7rQ3ROuSUwVsM/Nf9E1wtp0TAPTNBjzzqFhscniVmJ0FcMXBUN7sd632Q0vvcnIUhEOxLMhpLNJ78Qlq4YiXuHQ49nTeqUtYgxjxhBpHOT8lWc64SMgyUWZYc6G8B4v3jF/ghv+eJcIjKfz28SCM8Ruph5xY7RBa4n4Xm1OssUK+1wj/AGAYgm+qKEjewMTwtlox4SpHM8fXWkihAPx2osKaQUnhGvrqESQWg1FPeM7OPBV+JI31aobZtkSLCP1UDP+NSacmuqccLXOx/l688fwDV77Hg69b67fuhUIXP8CMRXQOGRl9aINoL3hLmsa5OuP1HzPlBGh9q6toG5ASDgxdalTwvSkAOvp/FDzQPzH/TgWyoPxwOcqV1lz1G39VVxV3gXo9woinAeUyhwLVNcfx9UWsuFwp4Qw2Qt1WI41f9Lg0Fe84XJhmOy/IBGmohnR6Kdo/cPhx1fST+DgAwAjMjDhNzgtmI6TF0eRpmMbzsNkHxMDZGY7ZOQMH0JCHkllvP4B4uJK3G8t4qlz0T+gt4st3MQ1GwANCVY1+JmrDElH3YiloSRM9ovQTcXwUPirewFxSM+Kg9dviWizIn8kqma8j7BkeV2Nqs9PP8JbCB9JgCtXmW1CyJTlCqnbNgqgyDBXu0O4vAiLmS20QPHjj3jdfvi991TEK8V/4sULMhB55LO4quFebWtD0dH1NlZCPyzUKmUZfAkJZQm8Kio9jmsVmDgKG10hDOH2gx955TYZ8Xh+BH1CrTIQG7e0gRiH8Rb/jH9TLBYr2kicPf0Y7QlTs2yVa5QZcBMTNooMmgT79tgyHOpowu/27p4G1aaRCbWBxovv/zfloRUjhv+lE/Jq1In/xEjlBqNlDMcX3RgI/T+wFabykgOzN0FVAicyJnwGqg0OgB+6QkhP4pua8QpEPnvEBx57RlQ3/eWfIhyCCI2Pa6wFNBLh6FEI104/SntCaDrAHcOy6RH0V/AzurTO5wNMQ4JlxSO3K1Em1fDKxR04xnjxx2wd3fIkLuqh5krxej6fy+Xzom7CW5CqIkFGiQGFNdZYgTsn9K8xJaYKnfM5U2VBg6uAAv0cSGWA/geWgJc7tWGQTAuFbH4hu5DHtyCIxw/06mYI3YuIxxZUTRj/BpoQnhLDlYqAXV/rxIg0nhWWQAO+VwVZkmA+ZNc2GA5mDYasrnR8X33SJxO9iwIljpR8QDwwFjerOPzwvJ760RQYvu8ouEsw9BU6GYk0mlIAqVSuIL+oSmWuyu5tAhRdlRK801jqJ6trwgLZdIGemsuJ/I/G0lTE4dNY2qDau6jFGUvt5pjQD52AbZRhbGbKkLDEbq7BkCqpntEp4Q4hjG6J0Hb5XL2ew0D7uptegcR6TYN0CzmpBExymxNpMmtiYDFTYZhGpQydY0+WTyRtjtEhYWpOWZcRske5XO4Ij8MAnzfMMob+cS8PJerFKay/ucb6nmmiuHf6sdoS4mKmKlcZplj6s1JitquNKidJBU83CPfVJeA7AdKHgAdi3jTbP+SVTK8SfoCqK8sF0wWX1SlNJoYwC+Lk832pKBdACcadKljpBqFqwlgsJuJtCeyq+R3NhMMTU1ODopEPEqJkaB6GAFhXyBwRwpQoo+IU5sXSK4mRvpe5IqsO7c4ID6MqoXcrf5TPLWRxxhC1WDqMPukwa0z2eD2YKVWARS7dlKxEPWFKQC6h2VO5wTHFEw7W3+rI7ogwM6kuj8a8ghgXxTiqPcksSiWERozEsvf1dIiHoWEGrE6iOiGEI7HElZkCqByXYC4sSlWg7Yd1RLhqWOWOiXG1+nxfT4dT6B4fg9dg2Qh+uh8gU310I4ay6qSMOoli3UVTZTXxS5h+SswsqMQkhjmBWVav5jshzBhXuYU6jpZi/v0ptegOD0IlI17vNVQFQ/37VgDfSwNU9GH4tToQN08/YHtCWLrJDel5ofKCY0qwUlrTA1cnhKumjQpB2Lp7dysmDIWHBgcjg3BoRtXnb5cI0Oz2w28CaBjKTcOwaanaIeEjNKn+crZS5piXVVNk7oAwPek1Cy3p45+RaCRmfOK2MotA39lPOAbtn1i07TIjqoTBZ/BVnz+rFAulEmeqkDogbLHXRATxIqYH3hgKGKbUKMkMU1izEK7/Z2l+Pp1JObwjhkKYHhl5IJc+G/nj1X+O5f9BTdWu7pRs1shcG0CIFzOZ0CsYWRhOKpYbn1YrEmAYfRZcOJmcnl6cnLsxvbqcsr/ephCuRiK/QA3+QhSJCNo75Z4w+RYTIkDD068ZIpURmlCSi+VyuSgrnBwoX9OcXZjbtXnTMJUwuIqC2uoq/oEV0VZdXRPOW0ehqljEG4WE105ea+f8ulyqVmVMwxGRn0CSq8VSsViVG/ofY8jJXZu3sDcSGhEjtEftGHI7P3yLCYVaTXjT4KTjN+pjt2/fvnYNMsRe//zi5OS4UYYRvYqIFWCucc3yKtFFe5fetrNhTGsOdbuKMT/tjXlbCQ7BuRB9u8GwDFf1Wk8cBVwBwkLk22+Qrnl/fgmRj4WmP5w7sE/oT+/HIoNJmHwV7aY76xiCzr2LtnqRLEEFhplp+O4/ADKHYsrJ7TaWJm8GVITEiEgymYyQE0wqqWaudvp5qITBgyh6AfWVhcNQp4Tzi+pJKm9aTDvrKBzk40yRKb44kTmm0QIR/aMk9iV0VvhfR2IWob+7YWMsqoS1GHytpHo2kR10B3Qsl4Sh2KLxAy5iCmgMRdHJAc9VrihJcORFYbVfeqP/WUQhS6I/jVmoFVYDYTR5+jaUSrg0qI9BqJqre18SZZZG0WXqY+hTH6CiUfN5xqK71AZXlRkZkr2pwClb9TZpYcA+2Dx2yXuDzNn83PTp0UYlHDHyDUaW3RNmdjI4kD9Fi075XPbunRgG1c5qMeNZQ/Nb5uTNmxNUcHPy/y4Kkd0tDKBTqHYn0DE0DpsI4btllzBjJlxyT1hLeahVGvX8KnOlgHiUX6jfvSNMY1Dh0DMrlfFUolQiEyPmWSpIUwsCxiJsMaubJlsBwrcrddr5qHVpJmIinNcJnX7Sanre40kd4M7v0FOox0jInuJRLlvfEm6k9tiGUmczhmnRPZwOIt4mNgIYa+GjttxUIzTbMK3dn9WXcjoOV+Ew3G8VASDz06eh0U3QMM+K8JzhKboUyNtiGGIXbWNB9Bk9dgkTZsKE/jkejgnp3ZQng26HkFreX601oa6AcsW4yEQWhKjcIh5sLTG8OBO2fCZ6aJcwZQqlEb/upQlM6KQjObQ/v3EAI04tFQpldixPXmWKVdMqGpmL8jHio+0t2Nq69gn9ZkLDBT040oQ/fM+JhF8br4qF39bWftt+sb1Ner6/3oN68PeCXOJMUyW8+vIYh5lIa8JkqzzhmDB4aHJTI+EwWVKxqyu/v2iUG69fvkITH/mlYdmTZWeqstQwr4PiVdCQiJNJq6GGQkybMYgkWH2kPeGOEXB11GJDuwp/93vjpFE+fl0uvnhdhlMEyciDGtfMgMrqEt8+zBiLyRaaPrU0bU146HNFGA7/Wjx+2SifnFTL30vVKpzl6d6IOtdYpmFCVpZeHueVTNGkmDeSbDM6iSYTtgnfMxLu0C4Iw+FvYSHNSeUXZflYlqqMyVoMal3jyrKBmVO2zOjAVrSVCWHahwMw1t5FbRWmGmEt0hlh+Mq3EjEZA2sVTmIs2w7MTGWGK+qjkgHl4z9wGKV4Us00mSqGksRb8Gw5qU64ZCR8zzHhd99KlZJqIEa/WbLKw8z862dQKXPa75WXRXkf56DHYhsfxTGmbRTFEk5feNMI542EhqmFb3TYBuAEns4WrftFBgu+ul2RGhpgRXopMeO1hAdV6PXWJvRG2lYyquZGTgXUCdNGwmVDpBndaW6ZbHLRPzAaV2xeqSaamfm/IvNK42OOj6tg07caQj6an25tQjyfeKsJF+0sY2gZP92m8PbRS80tk1bA31X3LLU0IgODjMSpmUNiG9KbBrOXWkXzgsckzDTX2qdr0sk6jbn01gtvrKnTjBh+xZHlTk4mP9BqoC4Otf9y6iiVSvJJ0QvWDnbQGHoayLXLFKcoamuVxkBoLL1h4W3UqX763R+SLFeLxWKpVCojNV41kND/wof+/PNPmVP2dBm52Ch+f/yqsYMveaIComXea5dvevfUmaFCmMJ1dyKRWDVoJJFBIt+h3psYnho2ymLDX2GBJuEQaRYcmthFZ2AYVaaEsNhpNH5uKHuB5P4JDgmjcC69OkBR1juevFWU8qfKhaMhw90Z8FhsvmmDSaNIPnpjY+OqIvNlTwVQUoYo97J0clz++VMSBJ8qYcY+YFQQJiP7S0H1VO0CnrH22BLavENpUnpxXP72433PjtJun7wxuTg93bxiZQWDZGhXxntYG3C6+XQO2gRFGEZxjxNTLv/6KTW640kpYSJ0OZWZX1qu7RyuJr3TN6DmoCZVoV/gQ0Jydac2MJ9wcmXlOWocyGhSLyE3ZX/9FFrgMgzz+60tQdGjo0F/SpU/OEq7+PD589VGQcJ5AjWQ7z3CAdAHCZdsf/pxz2tFuThElta1ZopVjyfj9KatPax1gK6TLTwz9AYcpDzLNkrKv4w2NsndxnVRu/v7vRk0uqcu3gSpr7766quvvvrqq6++ek//D8osD9vM13MkAAAAAElFTkSuQmCC"
             style={{height:'400px'}}/>
          </div>
          <div className="col-sm-2"></div>
        </div>
      </div>
    </>
  );
}
