import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

const Profile = () => {
  return (
    <>
      <h1 className="text-[44px]  mb-6 leading-[54px] font-[700]">
        Meet the Team
      </h1>
      <div className="grid grid-cols-3 gap-5 mt-5 ml-20">
        <Card className="w-96">
          <CardHeader floated={false} className="h-80">
            <img
              src="https://ecoyaan.com/images/about-us-social-media-team-01.png"
              alt="profile-picture"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              SHRUTHI
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              SOCIAL MEDIA
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2">
            <Tooltip content="Like">
              <FontAwesomeIcon icon={faFacebook} size="lg" color="#1877f2" />
            </Tooltip>
            <Tooltip content="Follow">
              <FontAwesomeIcon icon={faTwitter} size="lg" color="#1da1f2" />
            </Tooltip>
            <Tooltip content="Follow">
              <FontAwesomeIcon icon={faInstagram} size="lg" color="#8a3ab9" />
            </Tooltip>
          </CardFooter>
        </Card>
        <Card className="w-96">
          <CardHeader floated={false} className="h-80">
            <img
              src="https://ecoyaan.com/images/about-us-social-media-team-02.png"
              alt="profile-picture"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              URMIL
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              SOCIAL MEDIA
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2">
            <Tooltip content="Like">
              <FontAwesomeIcon icon={faFacebook} size="lg" color="#1877f2" />
            </Tooltip>
            <Tooltip content="Follow">
              <FontAwesomeIcon icon={faTwitter} size="lg" color="#1da1f2" />
            </Tooltip>
            <Tooltip content="Follow">
              <FontAwesomeIcon icon={faInstagram} size="lg" color="#8a3ab9" />
            </Tooltip>
          </CardFooter>
        </Card>
        <Card className="w-96">
          <CardHeader floated={false} className="h-80">
            <img
              src="https://ecoyaan.com/images/about-us-product-team-01.png"
              alt="profile-picture"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              DIVYA
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              UX DESIGN
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2">
            <Tooltip content="Like">
              <FontAwesomeIcon icon={faFacebook} size="lg" color="#1877f2" />
            </Tooltip>
            <Tooltip content="Follow">
              <FontAwesomeIcon icon={faTwitter} size="lg" color="#1da1f2" />
            </Tooltip>
            <Tooltip content="Follow">
              <FontAwesomeIcon icon={faInstagram} size="lg" color="#8a3ab9" />
            </Tooltip>
          </CardFooter>
        </Card>
        <Card className="w-96">
          <CardHeader floated={false} className="h-80">
            <img
              src="https://ecoyaan.com/images/about-us-product-team-02.png"
              alt="profile-picture"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              PRASHANITH
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              ENGINEERING
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2">
            <Tooltip content="Like">
              <FontAwesomeIcon icon={faFacebook} size="lg" color="#1877f2" />
            </Tooltip>
            <Tooltip content="Follow">
              <FontAwesomeIcon icon={faTwitter} size="lg" color="#1da1f2" />
            </Tooltip>
            <Tooltip content="Follow">
              <FontAwesomeIcon icon={faInstagram} size="lg" color="#8a3ab9" />
            </Tooltip>
          </CardFooter>
        </Card>
        <Card className="w-96">
          <CardHeader floated={false} className="h-80">
            <img
              src="https://ecoyaan.com/images/about-us-product-team-03.png"
              alt="profile-picture"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              SAI ABHILASH
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              ENGINEERING
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2">
            <Tooltip content="Like">
              <FontAwesomeIcon icon={faFacebook} size="lg" color="#1877f2" />
            </Tooltip>
            <Tooltip content="Follow">
              <FontAwesomeIcon icon={faTwitter} size="lg" color="#1da1f2" />
            </Tooltip>
            <Tooltip content="Follow">
              <FontAwesomeIcon icon={faInstagram} size="lg" color="#8a3ab9" />
            </Tooltip>
          </CardFooter>
        </Card>
        <Card className="w-96 ">
          <CardHeader floated={false} className="h-80 ">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR19lhkujveWWkAw_Xf2l2QLL7i0rtr_PoEBXi92lhv2A&s"
              alt="profile-picture"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              ???
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              TEAM ECOYAAN
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2">
            <p>
              This spot awaits you. Check out our{" "}
              <a className="text-blue" href="">
                open positions
              </a>
            </p>
          </CardFooter>
        </Card>

        {/* Other Card components */}
      </div>
    </>
  );
};

export default Profile;
