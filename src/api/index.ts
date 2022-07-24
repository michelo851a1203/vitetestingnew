import { apiUrl, HttpCodeStatus } from "../datatype/api";
import { 
  AddAnnouncementRequestType,
  announcementValidator, 
  convertBooleanToString, 
  GetAnnounceListResponseType, 
  GetAnnounceRequestType, 
  GetAnnounceResponseType 
} from "./index.validator";

export default function MainTestApi() {

  const getAnnouncementListApi = async () => {
    const url = `${apiUrl}/posts`
    try {
      const response = await fetch(url, {
        method: 'GET',
        redirect: 'follow',
      });

      if (response.status !== HttpCodeStatus.OK) {
        throw `error code : ${response.status} - unexpected error`;
      }

      const currentResult = <GetAnnounceListResponseType>(await response.json());
      return currentResult;
    } catch (error) {
      throw error;
    }
  }

  const getAnnouncementByIdApi = async (announcementId: string) => {
    const url = `${apiUrl}/posts/${announcementId}`
    try {
      const response = await fetch(url, {
        method: 'GET',
        redirect: 'follow',
      });

      if (response.status !== HttpCodeStatus.OK) {
        throw `error code : ${response.status} - unexpected error`;
      }
      const notValidatedAnnouncement = await response.json();
      return <GetAnnounceResponseType>(announcementValidator.parse(notValidatedAnnouncement));
    } catch (error) {
      throw error;
    }
  }

  const addAnnouncement = async (addCluster: AddAnnouncementRequestType) => {
    const url = `${apiUrl}/posts`
    try {
      const body = new URLSearchParams();
      body.append('name', addCluster.name);
      body.append('email', addCluster.email);
      body.append('content', addCluster.content);
      body.append('amount', addCluster.amount.toString());

      if (addCluster.description) {
        body.append('description', addCluster.description);
      }

      body.append('currentStatus', convertBooleanToString(addCluster.currentStatus));
      body.append('createDate', addCluster.createDate.toISOString());

      const response = await fetch(url, {
        method: 'POST',
        redirect: 'follow',
        body,
      });

      if (response.status !== HttpCodeStatus.NO_CONTENT) {
        throw `error code : ${response.status} - unexpected error`;
      }

      return true;
    } catch (error) {
      throw error;
    }

  }

  const updateAnnouncement = async (updateCluster: GetAnnounceRequestType) => {
    const url = `${apiUrl}/posts/${updateCluster.id}`
    try {
      const body = new URLSearchParams();
      body.append('name', updateCluster.name);
      body.append('email', updateCluster.email);
      body.append('content', updateCluster.content);
      body.append('amount', updateCluster.amount.toString());

      if (updateCluster.description) {
        body.append('description', updateCluster.description);
      }

      body.append('currentStatus', convertBooleanToString(updateCluster.currentStatus));
      body.append('createDate', updateCluster.createDate.toISOString());

      const response = await fetch(url, {
        method: 'PATCH',
        redirect: 'follow',
        body,
      });

      if (response.status !== HttpCodeStatus.NO_CONTENT) {
        throw `error code : ${response.status} - unexpected error`;
      }

      return true;
    } catch (error) {
      throw error;
    }
  }

  const deleteAnnouncementByIdApi = async (announcementId: string) => {
    const url = `${apiUrl}/posts/${announcementId}`
    try {
      const response = await fetch(url, {
        method: 'DELETE',
        redirect: 'follow',
      });

      if (response.status !== HttpCodeStatus.NO_CONTENT) {
        throw `error code : ${response.status} - unexpected error`;
      }
      return true;
    } catch (error) {
      throw error;
    }
  }

  return {
    getAnnouncementListApi,
    getAnnouncementByIdApi,
    addAnnouncement,
    updateAnnouncement,
    deleteAnnouncementByIdApi,
  }
}
