import React, { useEffect, useState } from "react";
import { CustomImageContainerStyled } from "../styled-components/CustomStyles.style";
import placeholder from "../../public/static/no-image-found.png";
import { Box } from "@mui/system";

const CustomImageContainer = ({
  cursor,
  mdHeight,
  maxWidth,
  height,
  width,
  objectfit,
  minwidth,
  src,
  alt,
  borderRadius,
  marginBottom,
  smHeight,
  smMb,
  smMaxWidth,
  smWidth,
  aspectRatio,
  padding,
  boxShadow,
  background,
}) => {
  const [imageFile, setState] = useState(null);
  useEffect(() => {
    setState(src ? src : placeholder.src);
  }, [src]);

  return (
    <CustomImageContainerStyled
      height={height}
      width={width}
      objectfit={objectfit}
      // objectfit="contain"
      minwidth={minwidth}
      border_radius={borderRadius}
      margin_bottom={marginBottom}
      smheight={smHeight}
      sm_mb={smMb}
      max_width={maxWidth}
      sm_max_width={smMaxWidth}
      sm_width={smWidth}
      md_height={mdHeight}
      cursor={cursor}
      aspect_ratio={aspectRatio}
      padding={padding}
      background={background}
    >
      {!imageFile ? (
        <Box
          sx={{
            height: "100%",
            width: "100%",
            border: (theme) => `1px solid ${theme.palette.neutral[200]}`,
          }}
        />
      ) : (
        <img
          src={imageFile}
          alt={alt}
          style={{ width: "100%", height: "100%", objectFit: "contain !important" }}
          onError={() => {
            // currentTarget.onerror = null; // prevents looping
            setState(placeholder.src);
          }}
          loading="lazy"
        />
      )}
    </CustomImageContainerStyled>
  );
};
export default CustomImageContainer;
