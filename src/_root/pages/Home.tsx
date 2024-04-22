// import { Models } from "appwrite";

// // import { useToast } from "@/components/ui/use-toast";
// import { Loader, PostCard, UserCard } from "@/components/shared";
// import { useGetRecentPosts, useGetUsers } from "@/lib/react-query/queries";


// const Home = () => {
//   // const { toast } = useToast();

//   const {
//     data: posts,
//     isLoading: isPostLoading,
//     isError: isErrorPosts,
//   } = useGetRecentPosts();
//   const {
//     data: creators,
//     isLoading: isUserLoading,
//     isError: isErrorCreators,
//   } = useGetUsers(10);

//   if (isErrorPosts || isErrorCreators) {
//     return (
//       <div className="flex flex-1">
//         <div className="home-container">
//           <p className="body-medium text-light-1">Something bad happened</p>
//         </div>
//         <div className="home-creators">
//           <p className="body-medium text-light-1">Something bad happened</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-1">
//       <div className="home-container">
//         <div className="home-posts">
//           <h2 className="h3-bold md:h2-bold text-left w-full">Home Feed</h2>
//           {isPostLoading && !posts ? (
//             <Loader/>
//           ) : (
//             <ul className="flex flex-col flex-1 gap-9 w-full ">
//               {posts?.documents.map((post: Models.Document) => (
//                 <li key={post.$id} className="flex justify-center w-full">
//                   <PostCard post={post} />
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       </div>

//       <div className="home-creators">
//         <h3 className="h3-bold text-light-1">Top Creators</h3>
//         {isUserLoading && !creators ? (
//           <Loader />
//         ) : (
//           <ul className="grid 2xl:grid-cols-2 gap-6">
//             {creators?.documents.map((creator) => (
//               <li key={creator?.$id}>
//                 <UserCard user={creator} />
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );


 
// };

// export default Home;
import { useState } from 'react';
import { Toast } from 'react-bootstrap'; // Import Toast component from react-bootstrap

import { Models } from "appwrite";
import { Loader, PostCard, UserCard } from "@/components/shared";
import { useGetRecentPosts, useGetUsers } from "@/lib/react-query/queries";

import Button from 'react-bootstrap/Button';


const Home = () => {

  const [showA, setShowA] = useState(true);
  

  const toggleShowA = () => setShowA(!showA);


  const { data: posts, isLoading: isPostLoading, isError: isErrorPosts } = useGetRecentPosts();
  const { data: creators, isLoading: isUserLoading, isError: isErrorCreators } = useGetUsers(10);

  if (isErrorPosts || isErrorCreators) {
    return (
      <div className="flex flex-1">
        <div className="home-container">
          <p className="body-medium text-light-1">Something bad happened</p>
        </div>
        <div className="home-creators">
          <p className="body-medium text-light-1">Something bad happened</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <h2 className="h3-bold md:h2-bold text-left w-full">Home Feed</h2>
          {isPostLoading && !posts ? (
            <Loader/>
          ) : (
            <ul className="flex flex-col flex-1 gap-9 w-full ">
              {posts?.documents.map((post: Models.Document) => (
                <li key={post.$id} className="flex justify-center w-full">
                  <PostCard post={post} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
  
      <div className="home-creators">
        <h3 className="h3-bold text-light-1">Top Creators</h3>
        {isUserLoading && !creators ? (
          <Loader />
        ) : (
          <ul className="grid 2xl:grid-cols-2 gap-6">
            {creators?.documents.map((creator) => (
              <li key={creator?.$id}>
                <UserCard user={creator} />
              </li>
            ))}
          </ul>
        )}
        <div className="addd my-4">
     <a target='_blank'
            rel='noopener noreferrer' href="https://ubiquitous-doodle-4rpr7g445v43p5-5000.app.github.dev/">Security Scan</a>
        
        </div>
      </div>
      
      {/* Toggle Toast */}
      <div style={{ position: 'fixed', bottom: '5px', left: '50%', transform: 'translateX(-50%)', zIndex: '9999' }}>
        <Button onClick={toggleShowA} className="mb-2">
           <strong>Hide/Show</strong> 
        </Button>
        <Toast show={showA} onClose={toggleShowA}>
          {/* <Toast.Header>
      
          </Toast.Header> */}
          <img height={10} width={150}
              src="/assets/images/ad.jpg"
              className="rounded me-2"
              alt=""
            />
          {/* <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body> */}
        </Toast>
      </div>
    </div>
  );
};

export default Home;
