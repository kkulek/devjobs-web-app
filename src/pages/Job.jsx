import {useLocation} from 'react-router-dom';
import {Banner} from "../components/Banner";
import {PositionDescription} from "../components/PositionDescription";
import {CTA} from "../components/CTA";

export function Job() {
    const locationData = useLocation();

    window.scrollTo({
        top: 0
    });

    const {
        company,
        postedAt,
        contract,
        position, location,
        apply,
        description,
        requirements,
        role,
        logoBackground,
        website,
        logo
    } = locationData.state;

    return (
        <div className="mx-5 mt-20 sm:mx-auto sm:w-5/6 max-w-[900px]">
            <Banner company={company}
                    website={website}
                    logoBackground={logoBackground}
                    logo={logo}
            />
            <PositionDescription postedAt={postedAt}
                                 contract={contract}
                                 position={position}
                                 location={location}
                                 apply={apply}
                                 description={description}
                                 requirements={requirements}
                                 role={role}
            />
            <CTA
                company={company}
                position={position}
                apply={apply}/>
        </div>
    )
}