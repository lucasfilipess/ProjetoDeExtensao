// import Raeact from 'react';
// import {
//   CommentCard,
//   StyledCarousel,
//   Container,
//   ReverseBtn,
//   // ContainerMobile,
// } from './styles';
// import { Carousel } from 'react-responsive-carousel';

// import arrowLeft from '../../../Assets/images/arrow-left.svg';
// import arrowRight from '../../../Assets/images/arrow-right.svg';

// export default function CustomCarousel() {
//   const createCarouselItemImage = (index, options = {}) => (
//     // <Container key={index}>
//     //   <CommentCard>
//     //     <div>
//     //       <div>
//     //         <h3>Puri P</h3>
//     //         <p>Owner and Operator</p>
//     //       </div>
//     //     </div>
//     //     <p>
//     //       “ I have onboarded 4 of my stores on to SwiftSku's platform and they
//     //       have removed many headaches with managing a gas station. If I have any
//     //       questions SwiftSku is just a phone call away. ”
//     //     </p>
//     //   </CommentCard>
//     // </Container>
//   );
//   // const createCarouselItemImageMobile = (index, options = {}) => (
//   //   <ContainerMobile key={index}>
//   //     <CommentCard style={{ marginRight: 30 }}>
//   //       <div>
//   //         <img
//   //           src={`assets/images/home/customerssay/profile-${index}.jpg`}
//   //           alt="profile picture"
//   //         />
//   //         <div>
//   //           <h3>Puri P</h3>
//   //           <p>Owner and Operator</p>
//   //         </div>
//   //       </div>
//   //       <p>
//   //         “ I have onboarded 4 of my stores on to SwiftSku's platform and they
//   //         have removed many headaches with managing a gas station. If I have any
//   //         questions SwiftSku is just a phone call away. ”
//   //       </p>
//   //     </CommentCard>
//   //   </ContainerMobile>
//   // );
//   const baseChildren = <div>{[1, 2].map(createCarouselItemImage)}</div>;
//   // const baseChildrenMobile = (
//   //   <div>{[1, 2, 3, 4].map(createCarouselItemImageMobile)}</div>
//   // );

//   return (
//     <Carousel
//       showThumbs={false}
//       renderArrowPrev={(onClickHandler, hasPrev, label) =>
//         hasPrev ? (
//           <ReverseBtn type="button" onClick={onClickHandler} title={label}>
//             <img src={arrowRight} alt="left button" />
//           </ReverseBtn>
//         ) : (
//           <button type="button" onClick={onClickHandler} title={label}>
//             <img src={arrowLeft} alt="left button" />
//           </button>
//         )
//       }
//       renderArrowNext={(onClickHandler, hasNext, label) =>
//         hasNext ? (
//           <button type="button" onClick={onClickHandler} title={label}>
//             <img src={arrowRight} alt="right button" />
//           </button>
//         ) : (
//           <ReverseBtn type="button" onClick={onClickHandler} title={label}>
//             <img src={arrowLeft} alt="right button" />
//           </ReverseBtn>
//         )
//       }
//     >
//       {baseChildren.props.children}
//       {/* {baseChildrenMobile.props.children} */}
//     </StyledCarousel>
//   );
// }
