import { Alert, AlertTitle, Button, ButtonGroup, Container, List, ListItem, ListItemText, Typography } from "@mui/material";
import agent from "../../app/api/agent";
import { useState } from "react";

export default function AboutPage(){
    const [validationErrors, setValidationErrors] = useState<string[]>([]);

    function getValidationError() {
        agent.TestErrors.getValidationError()
            .then(() => console.log('should not see this!'))
            .catch(error => setValidationErrors(error));
    }
    return(
        <Container>
            <Typography>نیلگون یک سایت فروشگاه آنلاین لوازم التحریر است که معتقدند، هر یادداشت دست‌نویس، هر نقاشی و هر طرحی شایسته ایجاد با بهترین ابزار است. به همین دلیل است که مجموعه‌ای از لوازم ثابت ممتاز را تهیه کرده اند تا خلاقیت شما را تقویت کرده و تجربه نوشتن روزمره شما را افزایش دهند.</Typography>
            
        </Container>
    )
}