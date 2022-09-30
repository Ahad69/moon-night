const { Media } = require('../models');

// add Medias
exports.addMediaService = async ({body }) => {

  const response = {
    code: 201,
    status: 'success',
    message: 'Media added successfully',
  };

  try {

    const newMedia = new Media(body);
    await newMedia.save();
    return response;

  } catch (error) {
    console.log(error)
    response.code = 500;
    response.status = 'failed';
    response.message = 'Error. Try again';
    return response;
  }
};



// update Medias
exports.updateMediaService = async ({ id, name , type ,description ,subject , image , videoLink }) => {
    const response = {
      code: 200,
      status: 'success',
      message: 'Media updated successfully',
      data: {},
    };
  
    try {
      const media = await Media.findOne({
        _id: id,
        isDelete: false,
      }).exec();
      if (!media) {
        response.code = 422;
        response.status = 'failed';
        response.message = 'No Media data found';
        return response;
      }
  

  
      media.name = name ? name : media.name;
      media.type = type ? type : media.type;
      media.description = description ? description : media.description;
      media.subject = subject ? subject : media.subject;
      media.videoLink = videoLink ? videoLink : media.videoLink;
      media.image = image ? image : media.image;
  
  
      await media.save();
  
      response.data.media = media;
      return response;
    } catch (error) {
      response.code = 500;
      response.status = 'failed';
      response.message = 'Error. Try again';
      return response;
    }
  };
  

  // delete Medias
  exports.deleteMediaService = async ({ id }) => {
    const response = {
      code: 200,
      status: 'success',
      message: 'Delete Media successfully',
    };
    console.log(id)
    try {
      const media = await Media.findOne({
        _id: id,
        isDelete: false,
      });
      if (!media) {
        response.code = 404;
        response.status = 'failed';
        response.message = 'No Media data found';
        return response;
      }
  
   
      await media.remove();

      return response;
    } catch (error) {
      response.code = 500;
      response.status = 'failed';
      response.message = 'Error. Try again';
      return response;
    }
  };
  


  // get all Medias
  exports.getMediasService = async ({ q }) => {
    const response = {
      code: 200,
      status: 'success',
      message: 'Fetch Media list successfully',
      data: {},
    };
  
    try {

      let query = { isDelete: false };
      if (q !== 'undefined' || q !== undefined || q) {
        let regex = new RegExp(q, 'i');
        query = {
          ...query,
          $or: [{ name: regex }, { category : regex }]
        };
      }

      const medias = await Media.find(query)
        .select('-__v -isDelete')
        .sort({ _id: -1 })
        .lean();
  
      if (medias.length === 0) {
        response.code = 404;
        response.status = 'failded';
        response.message = 'No Media data found';
        return response;
      }
  
      response.data = {
        medias
      };
  
      return response;
    } catch (error) {
      response.code = 500;
      response.status = 'failed';
      response.message = 'Error. Try again';
      return response;
    }
  };
  

// get Medias by search
  exports.searchMediaService = async ({ q }) => {

    const response = {
      code: 200,
      status: 'success',
      message: 'Media data found successfully',
      data: {},
    };
  
    try {
      let query = { isDelete: false };
      if (q !== 'undefined' || q !== undefined || q) {
        let regex = new RegExp(q, 'i');
        query = {
          ...query,
          $or: [{ name: regex }, { category : regex }]
        };
      }
  
      response.data.medias = await Media.find(query)
        .select('-__v -isDelete')
        .sort({ _id: -1 });
  
      if (response.data.Medias.length === 0) {
        response.code = 404;
        response.status = 'failed';
        response.message = 'No Media data found';
      }
  
      return response;
    } catch (error) {
      response.code = 500;
      response.status = 'failed';
      response.message = 'Error. Try again';
      return response;
    }
  };
  


  // get one Medias by id
  exports.getMediaService = async ({ id }) => {
    const response = {
      code: 200,
      status: 'success',
      message: 'Fetch deatiled Media successfully',
      data: {},
    };

    try {
      response.data.media = await Media.findOne({
        _id: id,
        isDelete: false,
      })
        .select('-__v -isDelete')
        .exec();
  
      if (!response.data.media) {
        response.code = 404;
        response.status = 'failed';
        response.message = 'No Media found';
        return response;
      }
  
      return response;
    } catch (error) {
      response.code = 500;
      response.status = 'failed';
      response.message = 'Error. Try again';
      return response;
    }
  };