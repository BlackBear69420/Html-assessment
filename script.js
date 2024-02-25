document.addEventListener("DOMContentLoaded", function() {
    const userData = [
      { 
        "name": "Dr. John Doe",
        "specialization": "Pediatrician",
        "image": "https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1708732800&semt=sph" 
      },
      { 
        "name": "Dr. Jane Smith",
        "specialization": "Orthopedic Surgeon",
        "image": "https://www.apexhospitals.com/_next/image?url=https%3A%2F%2Fbed.apexhospitals.com%2Fuploads%2Fdr_mayank_jain_b6caac6ac6.png&w=640&q=75" 
      },
      { 
        "name": "Dr. Emily Johnson",
        "specialization": "Cardiologist",
        "image": "https://nmc.ae/_next/image?url=https%3A%2F%2Fstatic-cdn.nmc.ae%2FUploads%2FDoctorsPhoto%2FThumb1%2F49704DoctorImage808dd2b7-977a-4f17-a2c0-b57db594ab90.png&w=640&q=75" 
      },
      { 
        "name": "Dr. Michael Brown",
        "specialization": "Neurologist",
        "image": "https://adityabirlahospital.com/_next/image?url=%2FDoctorsProfileimages%2Fdr-mrunmaya-panda.jpg&w=828&q=75" 
      },
      { 
        "name": "Dr. Sarah Williams",
        "specialization": "Dermatologist",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXdzzDK8m9MaEG9ODZ7ItSeDa3kgoNyOpJ3Ms6xs4qfTrtT4svTTZ6zPRw3ec1YGH3m9k&usqp=CAU" 
      },
      { 
        "name": "Dr. David Miller",
        "specialization": "Gynecologist",
        "image": "https://www.qunomedical.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fkfkw517g6gvn%2F2SkD1H8BlJlmXO4bLVTBBi%2Fc188f2a333405476402b67b4ab9e1d4a%2FDr_Sophie_Chung_Junomedical_DSC_0417.jpg%3Fw%3D1700%26q%3D100%26fm%3Dwebp&w=1920&q=75" 
      },
      { 
        "name": "Dr. Jennifer Lee",
        "specialization": "Ophthalmologist",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzt6YuqOdFsA5PBMvTOmGfj3IC2IEnVFH-jTr4BeZP2PlSTqNCA8xHtW7hPJMe-ZPqOIY&usqp=CAU" 
      },
      { 
        "name": "Dr. Daniel Wilson",
        "specialization": "Urologist",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHB0jBYzARnJbOc_1gw4Y687qzKUyv88CJWKk2CGwJgVR6KQ9wM_PelFBf1wNzDBYGrY0&usqp=CAU" 
      },
      { 
        "name": "Dr. Laura Martinez",
        "specialization": "Endocrinologist",
        "image": "https://assets.lybrate.com/img/documents/doctor/dp/11a0e6a1e4573fdea9160660359626fe/Cardiology-AmitabhYaduvanshi-Delhi-504b47.jpg" 
      },
      { 
        "name": "Dr. Kevin Garcia",
        "specialization": "Pulmonologist",
        "image": "https://t3.ftcdn.net/jpg/05/04/25/70/360_F_504257032_jBtwqNdvdMN9Xm6aDT0hcvtxDXPZErrn.jpg" 
      },
      { 
        "name": "Dr. Amanda Clark",
        "specialization": "Gastroenterologist",
        "image": "https://plus.unsplash.com/premium_photo-1664475450083-5c9eef17a191?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmVtYWxlJTIwZG9jdG9yfGVufDB8fDB8fHww" 
      },
      { 
        "name": "Dr. Mark Taylor",
        "specialization": "Otolaryngologist",
        "image": "https://c8.alamy.com/comp/2ME3M02/vertical-portrait-of-smiling-african-american-male-doctor-in-hospital-corridor-2ME3M02.jpg" 
      },
      { 
        "name": "Dr. John Doe",
        "specialization": "Pediatrician",
        "image": "https://img.freepik.com/free-photo/female-doctor-hospital-with-stethoscope_23-2148827776.jpg" 
      },
      { 
        "name": "Dr. Jane Smith",
        "specialization": "Orthopedic Surgeon",
        "image": "https://img.freepik.com/free-photo/doctor-with-white-robe-stethoscope_144627-43879.jpg" 
      },
      { 
        "name": "Dr. Emily Johnson",
        "specialization": "Cardiologist",
        "image": "https://nmc.ae/_next/image?url=https%3A%2F%2Fstatic-cdn.nmc.ae%2FUploads%2FDoctorsPhoto%2FThumb1%2F49704DoctorImage808dd2b7-977a-4f17-a2c0-b57db594ab90.png&w=640&q=75" 
      },
      { 
        "name": "Dr. Michael Brown",
        "specialization": "Neurologist",
        "image": "https://img.freepik.com/premium-photo/medical-concept-indian-beautiful-female-doctor-white-coat-with-stethoscope-waist-up-medical-student-woman-hospital-worker-looking-camera-smiling-studio-blue-background_185696-621.jpg?w=740" 
      },
      { 
        "name": "Dr. Sarah Williams",
        "specialization": "Dermatologist",
        "image": "https://c8.alamy.com/comp/2ME3M02/vertical-portrait-of-smiling-african-american-male-doctor-in-hospital-corridor-2ME3M02.jpg" 
      },
      { 
        "name": "Dr. David Miller",
        "specialization": "Gynecologist",
        "image": "https://media.istockphoto.com/id/1346124900/photo/confident-successful-mature-doctor-at-hospital.jpg?s=612x612&w=0&k=20&c=S93n5iTDVG3_kJ9euNNUKVl9pgXTOdVQcI_oDGG-QlE=" 
      },
      { 
        "name": "Dr. Jennifer Lee",
        "specialization": "Ophthalmologist",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzt6YuqOdFsA5PBMvTOmGfj3IC2IEnVFH-jTr4BeZP2PlSTqNCA8xHtW7hPJMe-ZPqOIY&usqp=CAU" 
      },
      { 
        "name": "Dr. Daniel Wilson",
        "specialization": "Urologist",
        "image": "https://static.vecteezy.com/system/resources/thumbnails/028/287/555/small/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo.jpg" 
      },
      { 
        "name": "Dr. Laura Martinez",
        "specialization": "Endocrinologist",
        "image": "https://img.freepik.com/premium-photo/indian-female-doctor-indian-nurse_714173-207.jpg        " 
      },
      { 
        "name": "Dr. Kevin Garcia",
        "specialization": "Pulmonologist",
        "image": "https://media.istockphoto.com/id/1372002650/photo/cropped-portrait-of-an-attractive-young-female-doctor-standing-with-her-arms-folded-in-the.jpg?s=612x612&w=0&k=20&c=o1QtStNsowOU0HSof6xQ_jZMglU8ZK565gHd655U6S4=" 
      },
      { 
        "name": "Dr. Amanda Clark",
        "specialization": "Gastroenterologist",
        "image": "https://plus.unsplash.com/premium_photo-1664475450083-5c9eef17a191?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmVtYWxlJTIwZG9jdG9yfGVufDB8fDB8fHww" 
      },
      { 
        "name": "Dr. Mark Taylor",
        "specialization": "Otolaryngologist",
        "image": "https://c8.alamy.com/comp/2ME3M02/vertical-portrait-of-smiling-african-american-male-doctor-in-hospital-corridor-2ME3M02.jpg" 
      },
      { 
        "name": "Dr. Amanda Clark",
        "specialization": "Gastroenterologist",
        "image": "https://plus.unsplash.com/premium_photo-1664475450083-5c9eef17a191?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmVtYWxlJTIwZG9jdG9yfGVufDB8fDB8fHww" 
      },
    ];
  
    const userCardsContainer = document.getElementById("user-cards");
    
    function createUserCard(user) {
      const userCard = document.createElement("div");
      userCard.classList.add("user-card");
  
      const image = document.createElement("img");
      image.src = user.image;
  
      const userInfo = document.createElement("div");
      userInfo.classList.add("user-info");
  
      const nameElement = document.createElement("h3");
      nameElement.textContent = user.name;
  
      const specializationElement = document.createElement("p");
      specializationElement.textContent =user.specialization;
  
      userInfo.appendChild(nameElement);
      userInfo.appendChild(specializationElement);
  
      userCard.appendChild(image);
      userCard.appendChild(userInfo);
      userCardsContainer.appendChild(userCard);
    }
    
    function loadUserImages() {
      userData.forEach(user => {
        createUserCard(user);
      });
    }
  
    loadUserImages();
  });