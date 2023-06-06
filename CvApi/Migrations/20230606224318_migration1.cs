using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace CvApi.Migrations
{
    /// <inheritdoc />
    public partial class migration1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Surname = table.Column<string>(type: "text", nullable: false),
                    Email = table.Column<string>(type: "text", nullable: false),
                    PasswordHash = table.Column<string>(type: "text", nullable: false),
                    PasswordSalt = table.Column<string>(type: "text", nullable: false),
                    UserCvDataId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "UserCvData",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    UserId = table.Column<int>(type: "integer", nullable: false),
                    Color = table.Column<string>(type: "text", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Surname = table.Column<string>(type: "text", nullable: false),
                    IsPhoneNumber = table.Column<bool>(type: "boolean", nullable: false),
                    PhoneNumber = table.Column<string>(type: "text", nullable: false),
                    IsEmail = table.Column<bool>(type: "boolean", nullable: false),
                    Email = table.Column<string>(type: "text", nullable: false),
                    IsLocation = table.Column<bool>(type: "boolean", nullable: false),
                    Location = table.Column<string>(type: "text", nullable: false),
                    IsGithub = table.Column<bool>(type: "boolean", nullable: false),
                    Github = table.Column<string>(type: "text", nullable: false),
                    IsLinkedin = table.Column<bool>(type: "boolean", nullable: false),
                    Linkedin = table.Column<string>(type: "text", nullable: false),
                    ProfileDescription = table.Column<string>(type: "text", nullable: false),
                    Aboutme = table.Column<string>(type: "text", nullable: false),
                    Tech = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserCvData", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UserCvData_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Education",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    SchoolName = table.Column<string>(type: "text", nullable: false),
                    SchoolCity = table.Column<string>(type: "text", nullable: false),
                    SchoolStartYear = table.Column<string>(type: "text", nullable: false),
                    SchoolFinishYear = table.Column<string>(type: "text", nullable: false),
                    SchoolFaculty = table.Column<string>(type: "text", nullable: false),
                    SchoolSubject = table.Column<string>(type: "text", nullable: false),
                    SchoolSpecialization = table.Column<string>(type: "text", nullable: false),
                    SchoolDesc = table.Column<string>(type: "text", nullable: false),
                    UserCvDataId = table.Column<int>(type: "integer", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Education", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Education_UserCvData_UserCvDataId",
                        column: x => x.UserCvDataId,
                        principalTable: "UserCvData",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Experience",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    CompanyName = table.Column<string>(type: "text", nullable: false),
                    CompanyCity = table.Column<string>(type: "text", nullable: false),
                    ExperienceFrom = table.Column<string>(type: "text", nullable: false),
                    ExperienceTo = table.Column<string>(type: "text", nullable: false),
                    ExperienceDesc = table.Column<string>(type: "text", nullable: false),
                    JobDescription = table.Column<string>(type: "text", nullable: false),
                    UserCvDataId = table.Column<int>(type: "integer", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Experience", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Experience_UserCvData_UserCvDataId",
                        column: x => x.UserCvDataId,
                        principalTable: "UserCvData",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "HobbyItem",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Hobby = table.Column<string>(type: "text", nullable: false),
                    UserCvDataId = table.Column<int>(type: "integer", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HobbyItem", x => x.Id);
                    table.ForeignKey(
                        name: "FK_HobbyItem_UserCvData_UserCvDataId",
                        column: x => x.UserCvDataId,
                        principalTable: "UserCvData",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "LanguageItem",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Language = table.Column<string>(type: "text", nullable: false),
                    UserCvDataId = table.Column<int>(type: "integer", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LanguageItem", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LanguageItem_UserCvData_UserCvDataId",
                        column: x => x.UserCvDataId,
                        principalTable: "UserCvData",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Project",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    ProjectName = table.Column<string>(type: "text", nullable: false),
                    ProjectLink = table.Column<string>(type: "text", nullable: false),
                    ProjectDescription = table.Column<string>(type: "text", nullable: false),
                    UserCvDataId = table.Column<int>(type: "integer", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Project", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Project_UserCvData_UserCvDataId",
                        column: x => x.UserCvDataId,
                        principalTable: "UserCvData",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "SkillItem",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Skill = table.Column<string>(type: "text", nullable: false),
                    UserCvDataId = table.Column<int>(type: "integer", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SkillItem", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SkillItem_UserCvData_UserCvDataId",
                        column: x => x.UserCvDataId,
                        principalTable: "UserCvData",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "SoftSkillItem",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    SoftSkill = table.Column<string>(type: "text", nullable: false),
                    UserCvDataId = table.Column<int>(type: "integer", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SoftSkillItem", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SoftSkillItem_UserCvData_UserCvDataId",
                        column: x => x.UserCvDataId,
                        principalTable: "UserCvData",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Education_UserCvDataId",
                table: "Education",
                column: "UserCvDataId");

            migrationBuilder.CreateIndex(
                name: "IX_Experience_UserCvDataId",
                table: "Experience",
                column: "UserCvDataId");

            migrationBuilder.CreateIndex(
                name: "IX_HobbyItem_UserCvDataId",
                table: "HobbyItem",
                column: "UserCvDataId");

            migrationBuilder.CreateIndex(
                name: "IX_LanguageItem_UserCvDataId",
                table: "LanguageItem",
                column: "UserCvDataId");

            migrationBuilder.CreateIndex(
                name: "IX_Project_UserCvDataId",
                table: "Project",
                column: "UserCvDataId");

            migrationBuilder.CreateIndex(
                name: "IX_SkillItem_UserCvDataId",
                table: "SkillItem",
                column: "UserCvDataId");

            migrationBuilder.CreateIndex(
                name: "IX_SoftSkillItem_UserCvDataId",
                table: "SoftSkillItem",
                column: "UserCvDataId");

            migrationBuilder.CreateIndex(
                name: "IX_UserCvData_UserId",
                table: "UserCvData",
                column: "UserId",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Education");

            migrationBuilder.DropTable(
                name: "Experience");

            migrationBuilder.DropTable(
                name: "HobbyItem");

            migrationBuilder.DropTable(
                name: "LanguageItem");

            migrationBuilder.DropTable(
                name: "Project");

            migrationBuilder.DropTable(
                name: "SkillItem");

            migrationBuilder.DropTable(
                name: "SoftSkillItem");

            migrationBuilder.DropTable(
                name: "UserCvData");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
