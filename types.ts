export type Image = {
    date: string | null;
    copyright: string | null;
    imageid: number;
    idsid: number;
    format: string;
    caption: string | null;
    description: string | null;
    technique: string | null;
    renditionnumber: string;
    displayorder: number;
    baseimageurl: string;
    alttext: string | null;
    width: number;
    iiifbaseuri: string;
    height: number;
};

export type Poster = {
    imageurl: string;
    caption: string | null;
};

export type Exhibition = {
    id: number;
    exhibitionid: number;
    title: string;
    begindate: string;
    enddate: string;
    description: string | null;
    shortdescription: string | null;
    textiledescription: string | null;
    color: string | null;
    temporalorder: number;
    createdate: string;
    url: string;
    htmldescription: string | null;
    lastupdate: string;
    images: Image[];
    primaryimageurl: string;
    poster: Poster;
};

export type ExhibitionSummary = {
    exhibitionid: number;
    title: string;
    primaryimageurl:string;
    begindate: string;
    enddate: string;
};