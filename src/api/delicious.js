import Ajax from "@/ajax/detailAjax";

export const deliciousInfo = () => Ajax.get("/deliciousImages");
