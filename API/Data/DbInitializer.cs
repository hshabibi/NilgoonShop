using API.Entities;
using Microsoft.AspNetCore.Identity;

namespace API.Data
{
    public static class DbInitializer
    {
        public static async Task Initialize(StoreContext context, UserManager<User> userManager)
    {
        if (!userManager.Users.Any())
        {
            var user = new User
            {
                UserName = "hs",
                Email = "hs@test.com"
            };

            await userManager.CreateAsync(user, "Pa$$w0rd");
            await userManager.AddToRoleAsync(user, "Member");

            var admin = new User
            {
                UserName = "admin",
                Email = "admin@test.com"
            };

            await userManager.CreateAsync(admin, "Pa$$w0rd");
            await userManager.AddToRolesAsync(admin, new[] {"Member","Admin"});
        }
            if(context.Products.Any()) return;

            var products =new List<Product>
            {
            
		        new Product
                {
                    Name = "هایلایتر مینی فانتزی طرح خرسی",
                    Description =
                        " به همراه جعبه طلقی"+System.Environment.NewLine+"چهار رنگ نئونی",
                    Price = 75000,
                    PictureUrl = "/images/products/pic_Highlighter_1.jpg",
                    Brand = "ESTDI",
                    Type = "هایلایتر",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "هایلایتر فانتزی هویج رنگی",
                    Description = "در شش رنگ پاستیلی",
                    Price = 175000,
                    PictureUrl = "/images/products/pic_Highlighter_2.jpg",
                    Brand = "Unknown",
                    Type = "هایلایتر",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "هایلایتر فانتزی بستنی چوبی",
                    Description =
                        "در شش رنگ پاستیلی",
                    Price = 195000,
                    PictureUrl = "/images/products/pic_Highlighter_3.jpg",
                    Brand = "Unknown",
                    Type = "هایلایتر",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "غلط گیر نواری آبنبات چوبی",
                    Description =
                        "ارسال رنگ بصورت رندوم\r\nعرض نوار: 5 میلی متر\r\nابعاد: 10 سانتی متر\nاندازه نوار: 6 متر",
                    Price = 58000,
                    PictureUrl = "/images/products/pic_Corrector_1.jpg",
                    Brand = "Unknown",
                    Type = "غلط گیر",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name ="جامدادی فانتزی گربه ای",
                    Description =
                        "ضد آب\r\nقابل شستشو\r\nجنس : چرم مصنوعی\r\nسایز : 6×10×22 سانتیمتر",
                    Price = 72000,
                    PictureUrl = "/images/products/pic_PencilCase_1.jpg",
                    Brand = "Kiffet",
                    Type = "جامدادی",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "جامدادی دانشجویی",
                    Description =
                        "ضد آب\r\nقابل شستشو\r\nجنس : چرم مصنوعی\r\nسایز : 3×20 سانتیمتر",
                    Price = 42000,
                    PictureUrl = "/images/products/pic_PencilCase_2.jpg",
                    Brand = "Kiffet",
                    Type = "جامدادی",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "جامدادی طرح دار",
                    Description =
                        "ابعاد:3.5 × 19.5 × 3.5 سانتی متر\r\nجنس:پلاستیکی",
                    Price = 45000,
                    PictureUrl = "/images/products/pic_PencilCase_3.jpg",
                    Brand = "Papko",
                    Type = "جامدادی",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "جاقلمی گربه",
                    Description =
                        "ابعاد:12 × 9.5 × 9 سانتی متر\r\nجنس:پلاستیکی",
                    Price = 145000,
                    PictureUrl = "/images/products/pic_PencilCase_4.jpg",
                    Brand = "Unknown",
                    Type = "جامدادی",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "اتود",
                    Description =
                        "طول بدنه: ۱۴.۵ میلی‌متر\r\nضخامت نوک: ۲.۰ میلی‌متر",
                    Price = 42000,
                    PictureUrl = "/images/products/pic_Pencil_1.jpg",
                    Brand = "Panter",
                    Type = "مداد",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "مداد رنگی 24 جعبه فلزی",
                    Description =
                        "ابعاد:19 × 1.5 × 21.5 سانتی متر\r\nطول بدنه:۱۷۰ میلی‌متر\r\nجنس جعبه:فلز\r\nتعداد رنگ‌های موجود در بسته:۲۴\r\nکشور مبدا برند و محصول:کره جنوبی",
                    Price = 315000,
                    PictureUrl = "/images/products/pic_ColorPencil_1.jpg",
                    Brand = "Owner",
                    Type = "مداد رنگی",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "مداد رنگی 12 رنگ جعبه فلزی",
                    Description =
                        "جنس جعبه: فلز\r\nکشور مبدا برند و محصول کره جنوبی",
                    Price = 165000,
                    PictureUrl = "/images/products/pic_ColorPencil_2.jpg",
                    Brand = "Owner",
                    Type = "مداد رنگی",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "دفتر 200 برگ جلد سخت",
                    Description =
                        "ابعاد:21*29سانتی متر",
                    Price = 155000,
                    PictureUrl = "/images/products/pic_NoteBook_1.jpg",
                    Brand = "Arad",
                    Type = "دفتر",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "دفتر ساینس سری سافتور",
                    Description =
                         "صد برگ\r\nابعاد:23* 16.5سانتی متر",
                    Price = 140000,
                    PictureUrl = "/images/products/pic_NoteBook_2.jpg",
                    Brand = "DotNote",
                    Type = "دفتر",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "پاک کن رنگی pvc free",
                    Description =
                        "متوسط(۴۰*۱۸*۱۱ میلیمتر)",
                    Price = 30000,
                    PictureUrl = "/images/products/pic_Eraser_1.jpg",
                    Brand = "Faber Castle",
                    Type = "پاک کن",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "پاک کن هرمی",
                    Description =
                        "ابعاد	2.5 * 4 * 2.5",
                    Price = 32000,
                    PictureUrl = "/images/products/pic_Eraser_2.jpg",
                    Brand = "Mapped",
                    Type = "پاک کن",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "پاک کن فانتزی میوه ای",
                    Description =
                        "سایز: ۱.۵×۲×۴.۵ سانت",
                    Price = 25000,
                    PictureUrl = "/images/products/pic_Eraser_3.jpg",
                    Brand = "WEIBO",
                    Type = "پاک کن",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "خط کش شیشه ای 20 سانت",
                    Description = "درجه بندی :سانتی متر ،اینچ",
                    Price = 4000,
                    PictureUrl = "/images/products/pic_Ruler_1.jpg",
                    Brand = "Arya",
                    Type = "خط کش",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "خودکار فانتزی دو خط",
                    Description =
                        "این امکان داده میشود که بصورت تکی یا دوتایی خطوط خیره کننده ترسیم کنید",
                    Price = 42000,
                    PictureUrl = "/images/products/pic_Pen_1.jpg",
                    Brand = "Unknown",
                    Type = "خودکار",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "خودکار فانتری چند رنگ پاندا",
                    Description =
                        "دارای ده رنگ",
                    Price = 62000,
                    PictureUrl = "/images/products/pic_Pen_2.jpg",
                    Brand = "Unknown",
                    Type = "خودکار",
                    QuantityInStock = 100
                }
            };

            //context.Products.AddRange(products);

            foreach(var product in products)
            {
            context.Products.Add(product);
            }

            context.SaveChanges();
        }
    }
}