import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import { staticNavLinks } from "./static-nav-data.ts";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        {
            staticNavLinks.map((link, i) => {
                return (
                    <Link key={i}  to={link.link}>
                        <Button color="secondary">
                            {link.text}
                        </Button>
                    </Link>
                )
            })
        }

      </ul>
    </nav>
  );
}

