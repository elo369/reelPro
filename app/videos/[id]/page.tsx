// "use client"

// import VideoComponents from '@/app/components/videoComponents'
// import { apiClient } from '@/lib/api-client'
// import { IVideo } from '@/models/video'
// import { useParams } from 'next/navigation'
// import React, { useEffect, useState } from 'react'


// const SingleVideo = () => {
//    const router= useParams()
//    console.log(router.id)
//    let id = router.id as string
//    const [video,setVideo] = useState<IVideo | null | string>(null)
//    console.log("🚀 SingleVideo component loaded",id);
   
//    useEffect(()=>{
//     setVideo(id)
//    },[id])
//   //  useEffect(() => {
//   //    const fetchVideo = async () => {
//   //      try {
//   //        const videoData = await apiClient.getVideo<IVideo>(`/videos/${id}`);
//   //        setVideo(videoData);
//   //      } catch (error) {
//   //        console.error("Error fetching video:", error);
//   //      }
//   //    };

//   //    if (id) {
//   //      fetchVideo();
//   //    }
//   //  }, [id]);
   
  
//   return (
//     <div>
//       {video ? 
//       <div>
         
//       </div>
//       : <h3>not Found</h3>}
//       <h1>hiee</h1>
//     </div>
//   )
// }

// export default SingleVideo
