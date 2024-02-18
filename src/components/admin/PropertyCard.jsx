import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import net from "../../assets/Image/net.png";
import fam from "../../assets/Image/fam.png";
import { IoLocation } from "react-icons/io5";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { GiHomeGarage } from "react-icons/gi";
import { FaRegSquare } from "react-icons/fa";
import { property } from "../../data/Property";
import { Link } from "react-router-dom";

export function PropertyCard() {
  const two = property.slice(0, 2);

  return (
    <div className="md:flex justify-center gap-10">
      {two.map((p, _id) => {
        const {
          image,
          title,
          price,
          location,
          featured,
          tags,
          createdAt,
          type,
          description,
          features,
        } = p;

        return (
          <Card className="mt-10 w-[314.13px] bg-[#181818]" key={_id}>
            <CardHeader color="blue-gray" className="relative h-[277px] ">
              <img src={image} className="h-full object-cover" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                <p className="text-[#E92727] text-sm font-[400]">
                  Posted on {createdAt}
                </p>
              </Typography>
              <Typography>
                <div className="flex gap-5">
                  <img src={net} alt="" />
                  <img src={fam} alt="" />
                </div>

                <h1 className="text-white font-semibold text-xl">{title}</h1>
                <address className="flex gap-3 items-center text-sm font-semibold not-italic">
                  <IoLocation /> <p className="text-[#8D8D8D]">{location}</p>
                </address>

                <p className="text-[#8D8D8D] font-semibold text-2xl">
                  ${price}
                </p>
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <section className="grid grid-cols-2 mb-5 gap-4 text-sm">
                <div className="flex gap-2 items-center">
                  {/* 1 */}
                  <IoBedOutline size={25} />
                  <p className="text-[#8D8D8D] font-medium">
                    {features.bedroom} Bedrooms
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  {/* 2 */}
                  <LuBath size={25} />
                  <p className="text-[#8D8D8D] font-medium">
                    {features.bathroom} Bathrooms
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  {/* 3 */}
                  <GiHomeGarage size={25} />
                  {features.garage ? (
                    <p className="text-[#8D8D8D] font-medium">Garage</p>
                  ) : (
                    <p>No Garage</p>
                  )}
                </div>
                <div className="flex gap-2 items-center">
                  {/* 4*/}
                  <FaRegSquare size={25} />
                  <p className="text-[#8D8D8D] font-medium">
                    {features.squareFeet} Square Feet
                  </p>
                </div>
              </section>

              <Link
                className="bg-[#F78214] max-w-[100%] text-white py-3 rounded-xl px-[85px] mx-auto"
                to={"/admin/propertyDetails"}
              >
                View Details
              </Link>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
